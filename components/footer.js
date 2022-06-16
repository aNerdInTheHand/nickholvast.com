class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        aNerdInTheHand © 2022
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);