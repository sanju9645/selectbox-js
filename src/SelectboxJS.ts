import { loadExternalResources, addDynamicStyles } from './loadResources.js';
import { initializeDefaultOption } from './helpers.js';
import { generateDropdownHtml } from './dropdown.js';
import { DropdownItem, DropdownOptions as BaseDropdownOptions } from './dropdown';
import { Styleblast } from './Styleblast.js';

type DropdownOptions = BaseDropdownOptions & {
  iconPackCDN?: string;
  customFontLibraryURL?: string;
  fontFamily?: string;
  dropdownMinWidth?: string;
  dropdownMaxWidth?: string;
  dropdownOptionHoverBackground?: string;
  dropdownOptionBackground?: string;
  dropdownFontSize?: string;
  customCSSStyles?: string;
};

class SelectboxJS {
  constructor() {
    Styleblast();
  }

  render(containerId: string, dropdownLabelItem: DropdownItem, items: DropdownItem[], options: DropdownOptions = {}): void {
    const containerElement = document.getElementById(containerId);
    if (!containerElement) {
      throw new Error(`Container with ID "${containerId}" not found.`);
    }

    const selectMenu = generateDropdownHtml(containerId, dropdownLabelItem,items, options);
    containerElement.appendChild(selectMenu);

    const optionMenu = document.getElementById(`selectbox-js-select-menu-${containerId}`);
    const selectBtn = document.getElementById(`selectbox-js-select-btn-${containerId}`);

    if (!optionMenu || !selectBtn) {
      throw new Error("Failed to generate select menu or button.");
    }

    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

    initializeDefaultOption(containerId, items[0]);

    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
      if (
        !optionMenu.contains(event.target as Node) &&
        !selectBtn.contains(event.target as Node)
      ) {
        optionMenu.classList.remove("active");
      }
    });

    loadExternalResources(options);
    addDynamicStyles(options);
  }
}

export { SelectboxJS };
