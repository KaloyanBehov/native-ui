#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Change this to your actual repo URL
const BASE_URL = "https://raw.githubusercontent.com/KaloyanBehov/rn-cn-ui/main";

const command = process.argv[2];
let componentName = null;

if (command === 'init') {
    // Handle init command
} else if (command === 'add') {
    componentName = process.argv[3];
} else {
    // Fallback for older usage: npx rn-cn-ui <component>
    componentName = command;
}

if (!componentName && command !== 'init') {
  console.error('Usage:');
  console.error('  npx rn-cn-ui init          (Initialize project with global.css and utils)');
  console.error('  npx rn-cn-ui add <name>    (Add a component)');
  process.exit(1);
}

async function main() {
  try {
    if (command === 'init') {
        console.log('Initializing project...');
        
        // 1. Create src/lib/utils.ts
        const utilsDir = path.join(process.cwd(), 'src', 'lib');
        const utilsPath = path.join(utilsDir, 'utils.ts');
        
        if (!fs.existsSync(utilsDir)) {
            fs.mkdirSync(utilsDir, { recursive: true });
        }

        const utilsUrl = `${BASE_URL}/src/lib/utils.ts`;
        const utilsResponse = await fetch(utilsUrl);
        if (utilsResponse.ok) {
            const utilsContent = await utilsResponse.text();
            fs.writeFileSync(utilsPath, utilsContent);
            console.log('✓ Created src/lib/utils.ts');
        } else {
            console.error('Failed to download utils.ts');
        }

        // 2. Create src/global.css
        const srcDir = path.join(process.cwd(), 'src');
        const cssPath = path.join(srcDir, 'global.css');
        
        if (!fs.existsSync(srcDir)) {
            fs.mkdirSync(srcDir, { recursive: true });
        }

        const cssUrl = `${BASE_URL}/src/global.css`;
        const cssResponse = await fetch(cssUrl);
        if (cssResponse.ok) {
            const cssContent = await cssResponse.text();
            fs.writeFileSync(cssPath, cssContent);
            console.log('✓ Created src/global.css');
        } else {
            console.error('Failed to download global.css');
        }

        console.log('\nProject initialized! Don\'t forget to import global.css in your root layout/index file.');
        return;
    }

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

    // Ensure utils.ts exists
    const utilsDir = path.join(process.cwd(), 'src', 'lib');
    const utilsPath = path.join(utilsDir, 'utils.ts');

    if (!fs.existsSync(utilsPath)) {
        console.log('utils.ts not found. Creating...');
        if (!fs.existsSync(utilsDir)) {
            fs.mkdirSync(utilsDir, { recursive: true });
        }
        
        const utilsUrl = `${BASE_URL}/src/lib/utils.ts`;
        const utilsResponse = await fetch(utilsUrl);
        
        if (utilsResponse.ok) {
            const utilsContent = await utilsResponse.text();
            fs.writeFileSync(utilsPath, utilsContent);
            console.log('✓ Created src/lib/utils.ts');
        } else {
            console.error('Failed to download utils.ts. Please create src/lib/utils.ts manually.');
        }
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
