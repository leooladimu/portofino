#!/usr/bin/env node

// Simple test runner script
const { execSync } = require('child_process');

console.log('🧪 Running Portfolio Tests...\n');

try {
  const output = execSync('npm test', { encoding: 'utf8', stdio: 'pipe' });
  console.log(output);
  console.log('✅ All tests passed successfully!');
} catch (error) {
  console.log('❌ Some tests failed:');
  console.log(error.stdout || error.message);
  process.exit(1);
}