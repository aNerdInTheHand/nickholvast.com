class Header extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <a class="header-link" href="/">nickholvast.com</a>
        <a class="header-link-short" href="/">NH</a>
        <a class="header-link" href="/rumours.html">Come And Get Me Plea</a>
        <a class="header-link-short" href="/rumours.html">Rumours</a>
        <a class="header-link" href="/about.html">About</a>
        <a class="header-link-short" href="/about.html">Me</a>
      </header>
    `;
  }
}

customElements.define('header-component', Header);