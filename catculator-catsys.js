import {
  html,
  LitElement
} from 'lit-element';
import style from './catculator-catsys-styles.js';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';


class CatculatorCatsys extends LitElement {

  static get properties() {
    return {
      result: {
        type: Array
      },
      digit: {
        type: Array
      }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.result = [];
  }

  render() {
    return html `
    <div class="container">
      <div class='display'>
      <vaadin-text-field value="${this.result}"></vaadin-text-field>
      </div>
      <vaadin-button @click='${this.clear}'>C</vaadin-button>
      <vaadin-button @click='${this.add}'>+</vaadin-button>
      <vaadin-button @click='${this.percent}'>%</vaadin-button>
      <vaadin-button @click='${this.divide}'>÷</vaadin-button>
      <vaadin-button @click='${this.multiply}'>x</vaadin-button>
      <vaadin-button @click='${this.subtract}'>-</vaadin-button>

      <vaadin-button class="digit" @click='${this.getInputNode}'>7</vaadin-button>
      <vaadin-button class="digit" @click='${this.getInputNode}'>8</vaadin-button>
      <vaadin-button class="digit" @click='${this.getInputNode}'>9</vaadin-button>
      <vaadin-button class="digit" @click='${this.getInputNode}'>5</vaadin-button>
      <vaadin-button class="digit" @click='${this.getInputNode}'>6</vaadin-button>
      <vaadin-button class="digit" @click='${this.getInputNode}'>4</vaadin-button>
      <vaadin-button class="digit" @click='${this.getInputNode}'>1</vaadin-button>
      <vaadin-button class="digit" @click='${this.getInputNode}'>2</vaadin-button>
      <vaadin-button class="digit" @click='${this.getInputNode}'>3</vaadin-button>
      <vaadin-button class="digit" @click='${this.getInputNode}'>0</vaadin-button>
    </div>
   `;
  }
  getInputNode() {
    const inputNode = this.shadowRoot.querySelector('.digit')
    this.result = [...this.result, inputNode.innerText]
    console.log(this.result);  
  }
  clear(){
    this.result = []
  }
}

window.customElements.define("catculator-catsys", CatculatorCatsys);
