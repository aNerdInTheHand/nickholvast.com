class AboutMusic extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <p>
      This page coming soon to explore:
      <ul>
        <li>Music theory</li>
        <li>Songwriting</li>
        <li>Guitars</li>
      </ul>
    </p>
    `;
  }
}

customElements.define('about-music-component', AboutMusic);