class Header extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <a href="/">nickholvast.com</a>
        <a href="/music.html">Music</a>
        <a href="/football.html">Football</a>
        <a href="/coding.html">Coding</a>
        <a href="/sully.html">Sully</a>
      </header>
    `;
  }
}

customElements.define('header-component', Header);