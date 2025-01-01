import { handleOptionClick } from './helpers';

export type DropdownItem = {
  id: string;
  text: string;
  icon?: string;
  iconColor?: string;
  onClick?: () => void;
};

export type DropdownOptions = {
  commonOnClick?: () => void;
};

const generateDefaultDropdownItem = (identifier: string, dropdownLabelItem: DropdownItem, items: DropdownItem[]): HTMLDivElement => {
  const selectBtnDiv = document.createElement('div');
  selectBtnDiv.className = 'selectbox-js-select-btn';
  selectBtnDiv.id = `selectbox-js-select-btn-${identifier}`;

  const defaultIcon = document.createElement('i');
  defaultIcon.id = `selectbox-js-select-option-text-default-icon-${identifier}`;
  defaultIcon.className = dropdownLabelItem?.icon || ''; 
  defaultIcon.style.color = dropdownLabelItem?.iconColor || '';
  
  const defaultTextSpan = document.createElement('span');
  defaultTextSpan.className = 'selectbox-js-select-option-text-default';
  defaultTextSpan.id = `selectbox-js-select-option-text-default-${identifier}`;
  defaultTextSpan.textContent = dropdownLabelItem?.text || 'Select an Item';

  const chevronIcon = document.createElement('i');
  chevronIcon.className = 'bx bx-chevron-down';

  selectBtnDiv.appendChild(defaultIcon);
  selectBtnDiv.appendChild(defaultTextSpan);
  selectBtnDiv.appendChild(chevronIcon);

  return selectBtnDiv;
};

const generateDropdownLi = (
  identifier: string,
  item: DropdownItem,
  dropdownLabelItem: DropdownItem,
  options: DropdownOptions = {}
): HTMLLIElement => {
  const optionLi = document.createElement('li');
  optionLi.id = `select-option-${item.id}-${identifier}`;
  optionLi.className = 'selectbox-js-select-menu-option';
  optionLi.onclick = () => handleOptionClick(identifier, item, options);

  const optionIcon = document.createElement('i');
  optionIcon.className = item?.icon || '';
  optionIcon.style.color = item?.iconColor || '';

  const optionTextSpan = document.createElement('span');
  optionTextSpan.className = 'selectbox-js-select-option-text';
  optionTextSpan.id = `selectbox-js-select-option-text-${identifier}`;
  optionTextSpan.textContent = item.text;

  if (item.text === dropdownLabelItem.text) {
    optionLi.classList.add("selected");
  }
  optionLi.appendChild(optionIcon);
  optionLi.appendChild(optionTextSpan);

  return optionLi;
};

const generateDropdownHtml = (
  identifier: string,
  dropdownLabelItem: DropdownItem,
  items: DropdownItem[],
  options: DropdownOptions = {}
): HTMLDivElement => {
  const selectMenuDiv = document.createElement('div');
  selectMenuDiv.className = 'selectbox-js-select-menu';
  selectMenuDiv.id = `selectbox-js-select-menu-${identifier}`;
  
  const selectBtnDiv = generateDefaultDropdownItem(identifier, dropdownLabelItem, items);
  const optionsUl = document.createElement('ul');
  optionsUl.className = 'selectbox-js-select-menu-options';
  optionsUl.id = `selectbox-js-select-menu-options-${identifier}`;

  items.forEach(item => {
    const optionLi = generateDropdownLi(identifier, item, dropdownLabelItem, options);
    optionsUl.appendChild(optionLi);
  });

  selectMenuDiv.appendChild(selectBtnDiv);
  selectMenuDiv.appendChild(optionsUl);

  return selectMenuDiv;
};

export { generateDropdownHtml };
