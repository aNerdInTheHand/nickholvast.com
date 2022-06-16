class About extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <p>
      This is a personal website that I maintain for the following reasons:
      <ul>
        <li>Testing any coding ideas I have from time to time</li>
        <li>Remembering that front end is a thing</li>
        <li>Vanity</li>
      </ul>
    </p>
    `;
  }
}

customElements.define('about-component', About);