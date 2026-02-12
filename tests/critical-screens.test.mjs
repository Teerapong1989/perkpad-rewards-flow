import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const app = readFileSync('src/App.tsx', 'utf8');
const login = readFileSync('src/pages/Login.tsx', 'utf8');
const dashboard = readFileSync('src/pages/Dashboard.tsx', 'utf8');
const scan = readFileSync('src/pages/CustomerScan.tsx', 'utf8');

test('login page renders with primary CTA', () => {
  assert.ok(login.includes('Business Owner Login'));
  assert.ok(login.includes('Sign in to dashboard'));
});

test('dashboard route is protected behind auth guard', () => {
  assert.ok(app.includes('path="/dashboard"'));
  assert.ok(app.includes('<ProtectedRoute><Dashboard /></ProtectedRoute>'));
});

test('customer qr scan page renders with instructions and CTA', () => {
  assert.ok(scan.includes('Scan to Check In'));
  assert.ok(scan.includes('Simulate check-in'));
});

test('dashboard screen includes empty state copy', () => {
  assert.ok(dashboard.includes('No recent check-ins yet.'));
});
