#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_URL = "https://raw.githubusercontent.com/KaloyanBehov/native-ui/main"; // TODO: Update this with your repo

const component = process.argv[2];
const command = process.argv[2];

let componentName = null;
if (command === 'add') {
    componentName = process.argv[3];
} else {
    componentName = command;
}

if (!componentName) {
  console.error('Usage: npx rn-cn-ui add <component-name>');
  process.exit(1);
}

async function main() {
  try {
    // 1. Fetch registry
    console.log('Fetching registry...');
    const registryResponse = await fetch(`${BASE_URL}/registry.json`);
    
    if (!registryResponse.ok) {
      throw new Error(`Failed to fetch registry: ${registryResponse.statusText}`);
    }
    
    const registry = await registryResponse.json();

    if (!registry[componentName]) {
      console.error(`Component "${componentName}" not found in registry.`);
      console.log('Available components:', Object.keys(registry).join(', '));
      process.exit(1);
    }

    const config = registry[componentName];
    const targetBaseDir = path.join(process.cwd(), 'src', 'components', 'ui'); 

    // 2. Create directory
    if (!fs.existsSync(targetBaseDir)) {
      console.log(`Creating directory: ${targetBaseDir}`);
      fs.mkdirSync(targetBaseDir, { recursive: true });
    }

    // 3. Fetch and write files
    for (const file of config.files) {
      const fileUrl = `${BASE_URL}/${file}`;
      const fileName = path.basename(file);
      const destPath = path.join(targetBaseDir, fileName);

      console.log(`Downloading ${fileName}...`);
      const fileResponse = await fetch(fileUrl);
      
      if (!fileResponse.ok) {
        console.error(`Failed to download ${fileName}`);
        continue;
      }

      const content = await fileResponse.text();
      fs.writeFileSync(destPath, content);
    }

    // 4. Install dependencies
    if (config.dependencies && config.dependencies.length > 0) {
      console.log(`Installing dependencies: ${config.dependencies.join(', ')}...`);
      try {
        const userAgent = process.env.npm_config_user_agent;
        let installCmd = 'npm install';
        if (userAgent && userAgent.startsWith('yarn')) {
            installCmd = 'yarn add';
        } else if (userAgent && userAgent.startsWith('pnpm')) {
            installCmd = 'pnpm add';
        } else if (userAgent && userAgent.startsWith('bun')) {
            installCmd = 'bun add';
        }

        execSync(`${installCmd} ${config.dependencies.join(' ')}`, { stdio: 'inherit' });
      } catch (error) {
        console.error('Failed to install dependencies manually.');
      }
    }

    console.log(`\nSuccessfully added ${componentName}!`);

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
