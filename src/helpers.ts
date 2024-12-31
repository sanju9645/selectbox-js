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
    const selectedOption = selectedOptionElement.innerText;
    selectedOpt.innerText = selectedOption;
    selectedOptIcon.className = item?.icon || '';
    selectedOptIcon.style.color = item.iconColor || '';
    optionMenu.classList.remove("active");

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
