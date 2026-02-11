#!/usr/bin/env node

/**
 * Setup script to ensure .env file exists
 * Copies .env.example to .env if .env doesn't exist
 */

const fs = require('fs');
const path = require('path');

const envExample = path.join(__dirname, '.env.example');
const envFile = path.join(__dirname, '.env');

if (!fs.existsSync(envFile)) {
  console.log('📝 Creating .env file from .env.example...');
  fs.copyFileSync(envExample, envFile);
  console.log('✅ .env file created successfully!');
  console.log('   You can edit .env to customize your configuration.');
  console.log('');
} else {
  console.log('✅ .env file already exists');
}
