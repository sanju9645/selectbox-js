import { DropdownItem } from './dropdown';

type Options = {
  commonOnClick?: () => void;
};

const initializeDefaultOption = (identifier: string, item: DropdownItem): void => {
  const selectedOption = document.getElementById(`select-option-${item.id}`);
  const selectedOpt = document.getElementById(`selectbox-js-select-option-text-default-${identifier}`);

  if (selectedOption && selectedOpt) {
    const selectedText = (selectedOption.querySelector(`#selectbox-js-select-option-text-${identifier}`) as HTMLElement)?.textContent;
    if (selectedText) {
      selectedOpt.innerText = selectedText;
    }
  }
};

const handleSeletedOptionBgColor = (identifier: string, item: DropdownItem) => {
  const selectedOptionElements = document.querySelectorAll('.selectbox-js-select-menu-option');
  selectedOptionElements.forEach(element => {
    element.classList.remove('selected');
  });
  const selectedOption = document.getElementById(`select-option-${item.id}-${identifier}`);
  
  if (selectedOption) {
    selectedOption.classList.add("selected");
  }
} 

const handleOptionClick = (
  identifier: string, 
  item: DropdownItem, 
  options: any = {}
) => {
  const optionMenu = document.getElementById(`selectbox-js-select-menu-${identifier}`);
  const selectedOpt = document.getElementById(`selectbox-js-select-option-text-default-${identifier}`);
  const selectedOptIcon = document.getElementById(`selectbox-js-select-option-text-default-icon-${identifier}`);
  const selectedOptionElement = document.getElementById(`select-option-${item.id}-${identifier}`);

  if (selectedOpt && selectedOptIcon && selectedOptionElement && optionMenu) {
    const selectedOptionTxt = selectedOptionElement.innerText;
    selectedOpt.innerText = selectedOptionTxt;
    selectedOptIcon.className = item?.icon || '';
    selectedOptIcon.style.color = item.iconColor || '';
    optionMenu.classList.remove("active");
    handleSeletedOptionBgColor(identifier, item);

    if (typeof item.onClick === 'function') {
      item.onClick();
    } else {
      console.log('onClick is not a function');
    }

    if (typeof options.commonOnClick === 'function') {
      options.commonOnClick();
    }
  }
};

export { initializeDefaultOption, handleOptionClick };
