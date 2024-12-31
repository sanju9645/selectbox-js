const styleRules: string = `
  .selectbox-js-select-menu {
    width: fit-content;
    position: relative;
  }

  .selectbox-js-select-menu .selectbox-js-select-btn {
    display: flex;
    height: 50px;
    padding: 0px 20px;
    font-weight: 400;
    border-radius: 8px;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    gap: 10px;
    width: fit-content;
  }

  .selectbox-js-select-btn i {
    transition: 0.3s;
  }

  .selectbox-js-select-menu.active .selectbox-js-select-btn i {
    transform: rotate(-180deg);
  }

  .selectbox-js-select-menu .selectbox-js-select-menu-options {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 10px 0px;
    margin: 0;
    border-radius: 8px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    display: none;
  }

  .selectbox-js-select-menu.active .selectbox-js-select-menu-options {
    display: block;
  }

  .selectbox-js-select-menu-options .selectbox-js-select-menu-option {
    display: flex;
    height: 50px;
    cursor: pointer;
    padding: 0 16px;
    border-radius: 8px;
    align-items: center;
  }

  .selectbox-js-select-menu-option i {
    margin-right: 12px;
  }
`;

const addStyleSheet = (): void => {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(styleRules));
  document.head.appendChild(style);
};

const Styleblast = (): void => {
  addStyleSheet();

  const observer = new MutationObserver(() => {
    addStyleSheet();
  });

  observer.observe(document.body, { childList: true, subtree: true });
};

export { Styleblast };
