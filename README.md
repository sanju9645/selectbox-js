# 🎯 SelectboxJS
> A sleek, adaptable dropdown solution for modern web applications.

<p align="center">
  <img src="https://img.shields.io/npm/v/selectbox-js" alt="npm version">
  <img src="https://img.shields.io/npm/dm/selectbox-js" alt="downloads">
  <img src="https://img.shields.io/github/license/yourusername/selectbox-js" alt="license">
</p>

## 📦 Installation

Choose your preferred installation method:

```bash
# Using npm
npm install selectbox-js

# Using yarn
yarn add selectbox-js

# Using pnpm
pnpm add selectbox-js
```

## 🚀 Quick Start

### 📥 Import Options

1. **CDN (JSDelivr)**
```javascript
import { SelectboxJS } from 'https://cdn.jsdelivr.net/npm/selectbox-js/dist/selectbox-js.es.js';
```

2. **ES Module**
```javascript
import { SelectboxJS } from 'selectbox-js';
```

3. **CommonJS**
```javascript
const { SelectboxJS } = require('selectbox-js');
```

4. **Specific Path**
```javascript
import { SelectboxJS } from './node_modules/selectbox-js/dist/selectbox-js.es.js';
```


### 🏗️ Basic Setup

1. **Add HTML Structure**
```html
<!-- Single Dropdown -->
<div id="dropdown-container-1"></div>

<!-- Multiple Dropdowns -->
<div id="dropdown-container-1"></div>
<div id="dropdown-container-2"></div>
```

2. **Initialize SelectboxJS**
```javascript
const selectbox = new SelectboxJS();
```

## 💡 Usage Examples

### 🎨 Basic Dropdown
```javascript
const items = [
  { id: 'item1', text: 'Option 1' },
  { id: 'item2', text: 'Option 2' },
  { id: 'item3', text: 'Option 3' }
];

const label = { text: 'Select an option' };

selectbox.render('dropdown-container-1', label, items);
```

### 🎯 Dropdown with Icons
```javascript
const socialItems = [
  { 
    id: 'github',
    text: 'Github',
    icon: 'bx bxl-github',
    iconColor: '#171515',
    onClick: () => window.open('https://github.com')
  },
  { 
    id: 'linkedin',
    text: 'LinkedIn',
    icon: 'bx bxl-linkedin-square',
    iconColor: '#0E76A8',
    onClick: () => window.open('https://linkedin.com')
  }
];

const options = {
  iconPackCDN: 'https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css',
  dropdownMinWidth: '250px'
};

selectbox.render('dropdown-container-1', label, socialItems, options);
```

## ⚙️ Configuration

### Selectbox Configuration
```
  const selectbox = new SelectboxJS();
  selectbox.render(identifier, dropdownLabelItem, items, options);
```
Here's the prettified version of your text:

#### `identifier`
Each dropdown should have a unique identifier so that you can use multiple dropdowns on the same page. The identifier should match the `id` of the `<div>` where the dropdown will be rendered.

#### `dropdownLabelItem`
The `dropdownLabelItem` is the item that will be displayed as the label of the dropdown. It should be an object with the following property:
- `text`: The text to be displayed as the label of the dropdown.

It can also have the following additional properties:
- `icon`: The icon to be displayed as the label of the dropdown.
- `iconColor`: The color of the icon.

#### `items`
`Items` (is an array of objects) are the options that will be displayed in the dropdown.

### 🎯 Item Properties

Each item in the dropdown can have these properties:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `string` | ✅ | Unique identifier, The unique identifier of the item |
| `text` | `string` | ✅ | Display text, The text to be displayed as the label of the dropdown. |
| `icon` | `string` | ❌ | Icon class name, The icon to be displayed as the label of the dropdown. |
| `iconColor` | `string` | ❌ | Icon color |
| `onClick` | `function` | ❌ | Click handler, The function to be called when the item is clicked. If you need to perform an action for a specific option, use this property. |


#### `options`
As the name suggests, this is optional. The `options` is an object that contains the configuration for the dropdown. It can have the following properties:

### 🎛️ Options Reference

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `iconPackCDN` | `string` | ❌ | - | The CDN URL of the icon pack to be used in the dropdown |
| `customFontLibraryURL` | `string` | ❌ | - | The URL of the custom font library to be used in the dropdown |
| `fontFamily` | `string` | ❌ | `system-ui` | The font family to be used in the dropdown. |
| `dropdownMinWidth` | `string` | ❌ | `200px` | Minimum dropdown width |
| `dropdownMaxWidth` | `string` | ❌ | `500px` | Maximum dropdown width |
| `dropdownOptionBackground` | `string` | ❌ | `#fff` | Option background color |
| `dropdownOptionHoverBackground` | `string` | ❌ | `#F2F2F2` | The background color of the dropdown options when hovered. |
| `selectedOptionBgColor` | `string` | ❌ | `#F2F2F2` | Selected option background |
| `dropdownFontSize` | `string` | ❌ | `15px` | Font size for options |
| `customCSSStyles` | `string` | ❌ | - | Custom CSS styles |
| `commonOnClick` | `function` | ❌ | - | The function to be called when a dropdown option is clicked. If you need to perform an action for all options, use this property. |

## 🎨 Styling Examples

### Custom Theme
```javascript
const options = {
  dropdownOptionBackground: '#2C3E50',
  dropdownOptionHoverBackground: '#34495E',
  selectedOptionBgColor: '#34495E',
  dropdownFontSize: '16px',
  customCSSStyles: `
    .selectbox-js-select-btn {
      border-radius: 8px;
      border: 2px solid #3498DB;
    }
    .selectbox-js-content {
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `
};
```

## Example
```
<body>
    <div id="dropdown-container-1"> </div>
    <div id="dropdown-container-2"> </div>

    <script type="module">
      import { SelectboxJS } from 'https://cdn.jsdelivr.net/npm/selectbox-js/dist/selectbox-js.es.js';
      // import { SelectboxJS } from 'selectbox-js';

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

        const dropdownLabelItem1 = { id: 'github', text: 'Github', icon: 'bx bxl-github', iconColor: '#171515' };
        const dropdownLabelItem2 = { id: 'select-an-Item', text: 'Select an Item to display', icon: '', iconColor: '' };

        const selectbox = new SelectboxJS();
        selectbox.render('dropdown-container-1', dropdownLabelItem1, customeSelectItems, options);
        selectbox.render('dropdown-container-2', dropdownLabelItem2, customeSelectItems, options);
      });
    </script>
  </body>
```

## 🌟 Demo

Check out the live demo of **SelectboxJS**:  
👉 [https://sanju9645.github.io/selectbox-js](https://sanju9645.github.io/selectbox-js)


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have any questions or need help, please [open an issue](https://github.com/yourusername/selectbox-js/issues).
