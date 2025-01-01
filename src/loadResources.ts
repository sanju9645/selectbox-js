type ResourceOptions = {
  iconPackCDN?: string;
  customFontLibraryURL?: string;
  fontFamily?: string;
  dropdownMinWidth?: string;
  dropdownMaxWidth?: string;
  dropdownOptionHoverBackground?: string;
  dropdownOptionBackground?: string;
  dropdownFontSize?: string;
  customCSSStyles?: string;
  selectedOptionBgColor?: string;
};

const loadExternalResources = (options: ResourceOptions): void => {
  if (options.iconPackCDN) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = options.iconPackCDN;
    document.head.appendChild(link);
  }

  if (options.customFontLibraryURL && options.fontFamily) {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = options.customFontLibraryURL;
    document.head.appendChild(fontLink);

    const elements = document.querySelectorAll('.selectbox-js-select-menu');
    elements.forEach((element) => {
      (element as HTMLElement).style.fontFamily = options.fontFamily!;
    });
  }
};

const addDynamicStyles = (options: ResourceOptions): void => {
  // Remove any previously added styles to avoid duplicates
  const existingStyle = document.getElementById('dynamic-width-styles');
  if (existingStyle) {
    existingStyle.remove();
  }

  // Construct the new styles dynamically
  const styleRules: string[] = [];

  if (options.dropdownMinWidth) {
    styleRules.push(`
      .selectbox-js-select-menu {
        min-width: ${options.dropdownMinWidth} !important;
      }
      .selectbox-js-select-menu .selectbox-js-select-btn {
        min-width: ${options.dropdownMinWidth} !important;
      }
    `);
  }

  if (options.dropdownMaxWidth) {
    styleRules.push(`
      .selectbox-js-select-menu {
        max-width: ${options.dropdownMaxWidth} !important;
      }
      .selectbox-js-select-menu .selectbox-js-select-btn {
        max-width: ${options.dropdownMaxWidth} !important;
      }
    `);
  }

  styleRules.push(`
    .selectbox-js-select-menu-options .selectbox-js-select-menu-option:hover {
      background: ${options.dropdownOptionHoverBackground || '#F2F2F2'} !important;
    }

    .selectbox-js-select-menu .selectbox-js-select-btn, .selectbox-js-select-menu .selectbox-js-select-menu-options {
      background: ${options.dropdownOptionBackground || '#fff'} !important;
    }

    .selectbox-js-select-menu {
      font-size: ${options.dropdownFontSize || '15px'} !important;
    }
    
    .selectbox-js-select-menu-option.selected {
      background: ${options?.selectedOptionBgColor ? options.selectedOptionBgColor : '#F2F2F2'} !important;
    }
  `);

  if (options.customCSSStyles) {
    styleRules.push(options.customCSSStyles);
  }

  if (styleRules.length > 0) {
    const style = document.createElement('style');
    style.id = 'dynamic-width-styles';
    style.innerHTML = styleRules.join("\n");
    document.head.appendChild(style);
  }
};

export { loadExternalResources, addDynamicStyles };
