class Header extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <a class="header-link" href="/">nickholvast.com</a>
        <a class="header-link-short" href="/">NH</a>
        <a class="header-link" href="/cv.html">CV</a>
        <a class="header-link-short" href="/cv.html">CV</a>
        <a class="header-link" href="/music.html">Music</a>
        <a class="header-link-short" href="/music.html">M</a>
        <a class="header-link" href="/football.html">Football</a>
        <a class="header-link-short" href="/football.html">F</a>
        <a class="header-link" href="/coding.html">Coding</a>
        <a class="header-link-short" href="/coding.html">C</a>
        <a class="header-link" href="/sully.html">Sully</a>
        <a class="header-link-short" href="/sully.html">S</a>
      </header>
    `;
  }
}

customElements.define('header-component', Header);