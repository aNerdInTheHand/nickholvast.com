class Header extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <h1>nickholvast.com</h1>
      </header>
    `;
  }
}

customElements.define('header-component', Header);