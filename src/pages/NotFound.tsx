
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Page not found</h2>
        <p className="text-lg text-gray-600 mb-8 px-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="xl"
            className="btn-premium text-base sm:text-lg px-8 py-4 rounded-xl w-full sm:w-auto min-h-[48px]"
            asChild
          >
            <Link to="/">
              <Home className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Go Home
            </Link>
          </Button>
          <Button 
            variant="outline"
            size="xl"
            className="text-base sm:text-lg px-8 py-4 rounded-xl w-full sm:w-auto min-h-[48px]"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
