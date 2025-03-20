#!/bin/bash

echo "🔄 Setting up the project..."

# Exit on error
set -e

# Check if NVM is installed, and install it if missing
if ! command -v nvm &> /dev/null; then
  echo "📥 Installing NVM..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
fi

# Use the Node version specified in .nvmrc (or install if missing)
echo "🔍 Checking Node version..."
nvm install
nvm use

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Set up Husky hooks
echo "⚙️ Setting up Git hooks with Husky..."
npx husky install

# Ensure all Husky hooks are executable
if [ -d ".husky" ]; then
  echo "🔧 Making Husky hooks executable..."
  chmod +x .husky/*
fi

# Run initial lint and format check
echo "🧹 Running lint and format checks..."
npm run lint
npm run format

# Success message
echo "✅ Project setup complete! You can now start coding 🚀"
