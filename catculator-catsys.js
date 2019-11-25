import {
  html,
  LitElement
} from 'lit-element';
import style from './catculator-catsys-styles.js';

class CatculatorCatsys extends LitElement {
  static get properties() {
    return {
      hello: {
        type: String
      }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.hello = 'Hello';
  }

  render() {
    return html `
        <p>Some static DOM</p>
        <h2>${this.hello} catculator-catsys</h2>
      `;
  }
}

window.customElements.define("catculator-catsys", CatculatorCatsys);
