// ABOUTME: Utility for deferring non-critical tasks to improve Time to Interactive
// ABOUTME: Uses task scheduling to minimize main thread blocking

interface DeferredTask {
  fn: () => void | Promise<void>;
  priority: 'low' | 'medium' | 'high';
  timeout?: number;
}

class TaskScheduler {
  private tasks: DeferredTask[] = [];
  private isProcessing = false;

  addTask(task: DeferredTask) {
    this.tasks.push(task);
    if (!this.isProcessing) {
      this.processTasks();
    }
  }

  private async processTasks() {
    this.isProcessing = true;
    
    // Sort tasks by priority
    this.tasks.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    while (this.tasks.length > 0) {
      const task = this.tasks.shift()!;
      
      try {
        if ('requestIdleCallback' in window) {
          await new Promise<void>(resolve => {
            requestIdleCallback(async () => {
              await task.fn();
              resolve();
            }, { timeout: task.timeout || 5000 });
          });
        } else {
          // Fallback for browsers without requestIdleCallback
          await new Promise<void>(resolve => {
            setTimeout(async () => {
              await task.fn();
              resolve();
            }, 16); // ~1 frame
          });
        }
      } catch (error) {
        console.warn('Deferred task failed:', error);
      }
      
      // Yield control to allow other work
      await new Promise(resolve => setTimeout(resolve, 0));
    }
    
    this.isProcessing = false;
  }
}

export const taskScheduler = new TaskScheduler();

// Helper functions for common deferred tasks
export const deferAnalytics = (initFn: () => void) => {
  taskScheduler.addTask({
    fn: initFn,
    priority: 'low',
    timeout: 10000
  });
};

export const deferNonCriticalFeatures = (initFn: () => void) => {
  taskScheduler.addTask({
    fn: initFn,
    priority: 'medium',
    timeout: 7000
  });
};

export const deferHighPriorityTasks = (initFn: () => void) => {
  taskScheduler.addTask({
    fn: initFn,
    priority: 'high',
    timeout: 3000
  });
};