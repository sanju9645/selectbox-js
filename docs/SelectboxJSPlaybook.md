## Step 1: Setting Up the Project

1.1 Initialize the Project
1. Open a terminal in the folder where you want to create your project.
2. Run the following command:
```
cd selectbox-js
npm init -y
```

1.2 Install Dependencies
```
npm install --save-dev vite typescript @types/node rollup-plugin-dts
```

1.3 Project Structure
```
selectbox-js/
├── test/              # For testing your library
│   └── index.html     # Example usage
├── src/               # Source code for the library
│   │  └── SelectboxJS.ts
├── dist/              # Build output (auto-generated)
├── vite.config.ts     # Vite configuration
├── package.json       # NPM metadata
├── tsconfig.json      # TS configuration
└── README.md          # Documentation
```

1.4 Add .gitignore file
```
node_modules
dist
test
```

## Step 2: Set up TypeScript Configuration
```
{
  "compilerOptions": {
    "target": "ES6",                          // Sets the ECMAScript target version to ES6
    "module": "ESNext",                       // Specifies the module system
    "moduleResolution": "Node",              // Uses Node.js-style module resolution
    "strict": true,                           // Enables all strict type-checking options
    "esModuleInterop": true,                  // Allows interoperability between CommonJS and ES modules
    "skipLibCheck": true,                     // Skips type checking of declaration files
    "forceConsistentCasingInFileNames": true, // Enforces consistent casing in file imports
    "outDir": "./dist",                       // Output directory for compiled files
    "rootDir": "./src",                       // Root directory of input files
    "resolveJsonModule": true                 // Allows importing JSON files
  },
  "include": [
    "src/**/*",                            // Includes all TypeScript files in src and its subdirectories
    "test/**/*"                            // Includes all HTML files in test and its subdirectories
  ]
}
```

## Step 3: Configure Vite
```
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'test'),
  server: {
    open: true
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    lib: {
      entry: path.resolve(__dirname, 'src/SelectboxJS.ts'),
      name: 'SelectboxJS',
      fileName: (format) => `selectbox-js.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {}
  }
});
```

## Step 3: Add Source Code
Create the files 
  1. src/SelectboxJS.ts  
  2. src/dropdown.ts  
  3. src/loadResources.ts  
  4. src/helpers.ts and add the example code

## Step 4: Add Example for Testing
4.1 Create test/index.html
This file will serve as a playground to test your library:

## Step 5: Build the Package
5.1 Add Scripts to package.json

```
{
  "name": "selectbox",
  "version": "1.0.0",
  "description": "A sleek, adaptable dropdown solution for building web applications.",
  "main": "dist/selectbox-js.cjs.js",
  "module": "dist/selectbox-js.es.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "prepare": "npm run build"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sanju9645/selectbox-js.git"
  },
  "author": "Osprey",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/sanju9645/selectbox-js/issues"
  },
  "homepage": "https://github.com/sanju9645/selectbox-js#readme",
  "devDependencies": {
    "@types/node": "^22.10.2",
    "rollup-plugin-dts": "^6.1.1",
    "typescript": "^5.7.2",
    "vite": "^6.0.6"
  },
  "files": [
    "dist/**/*",
    "README.md"
  ],
  "exports": {
    ".": {
      "import": "./dist/selectbox-js.cjs.js",
      "require": "./dist/selectbox-js.cjs.js"
    },
    "./package.json": "./package.json"
  },
  "keywords": [
    "vite",
    "typescript",
    "package"
  ]
}
```

## Step 6: Build the Package
Run the following command:
```
npm run build
```

## Step 7: Test Locally
Include the following code in the index.html file to test the library:
```
  <script type="module">
    // import { SelectboxJS } from 'https://cdn.jsdelivr.net/npm/selectbox-js/dist/selectbox-js.es.js';
    // import { SelectboxJS } from 'selectbox-js';
    // const { SelectboxJS } = require('selectbox-js');
    // import { SelectboxJS } from './node_modules/selectbox-js/dist/selectbox-js.es.js';
    import { SelectboxJS } from '../dist/selectbox-js.es.js';

    document.addEventListener('DOMContentLoaded', () => {
      const customeSelectItems = [
        { id: 'github', text: 'Github', icon: 'bx bxl-github', iconColor: '#171515', onClick: () => console.log('github') },
        { id: 'instagram', text: 'Instagram', icon: 'bx bxl-instagram-alt', iconColor: '#E1306C', onClick: () => console.log('instagram') },
        { id: 'linkedin', text: 'Linkedin', icon: 'bx bxl-linkedin-square', iconColor: '#0E76A8', onClick: () => console.log('linkedin') },
        { id: 'facebook', text: 'Facebook', icon: 'bx bxl-facebook-circle', iconColor: '#4267B2', onClick: () => console.log('facebook') },
        { id: 'twitter', text: 'Twitter', icon: 'bx bxl-twitter', iconColor: '#1DA1F2', onClick: () => console.log('twitter') }
      ];

      const options = {
        iconPackCDN: 'https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css',
        customFontLibraryURL : 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap',
        fontFamily: "'Poppins', sans-serif",
        dropdownMinWidth: '200px',
        dropdownMaxWidth: '500px',
        dropdownOptionBackground: '#fff',
        dropdownOptionHoverBackground: '#F2F2F2',
        selectedOptionBgColor: '#F2F2F2',
        dropdownFontSize: '15px',
        customCSSStyles: ' .selectbox-js-select-btn i { transition: 0.5s; }',
        commonOnClick: () => console.log('commonOnClick')
      };

      // const dropdownLabelItem1 = { text: 'Select an Item to display' };
      const dropdownLabelItem1 = { text: 'Select an Item to display', icon: 'bx bx-selection' };
      const dropdownLabelItem2 = customeSelectItems[0];
      
      const selectbox = new SelectboxJS();
      selectbox.render('dropdown-container-1', dropdownLabelItem1, customeSelectItems, options);
      selectbox.render('dropdown-container-2', dropdownLabelItem2, customeSelectItems, options);
    });
  </script>
```

Run Dev Server
To test the example code, use Vite's development server:
```
npm run dev
```


## Step 7: Prepare for Publishing
7.1 Update package.json
Ensure package.json has the following fields:
```
{
  "main": "dist/selectbox-js.cjs.js",
  "module": "dist/selectbox-js.es.js",
  "files": [
    "dist",
    "README.md"
  ],
}
```

files: Specifies which files to include in the package.

## Step 8: Publish the Package
8.1 Log In to NPM:
```
npm login

npm whoami
```

8.2 Bump Version
Bump the version before publishing:
```
npm version patch
```


8.3 Publish
```
npm publish --access public
```

## Step 9: Verify the Published Package
Install the package in a new project and test:
```
npm install selectbox-js
```

## Complete Workflow
Code in src/.
Build with npm run build.
Test with npm run dev.
