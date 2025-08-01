const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting Event360 build process...');

try {
  // Change to client directory
  process.chdir(path.join(__dirname, 'client'));
  console.log('📁 Changed to client directory');

  // Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });

  // Build the project
  console.log('🔨 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 