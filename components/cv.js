class CV extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <h1>CV<h1/>
    `;
  }
}

customElements.define('cv-component', CV)