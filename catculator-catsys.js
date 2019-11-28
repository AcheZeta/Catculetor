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
    this.result = [0];
  }

  render() {
    return html `
    <div class="container">
      <div class='display'>
      <vaadin-text-field label="Read-only" value="${this.result}" readonly></vaadin-text-field>
      </div>
      <vaadin-button @click='${this.clear}'>C</vaadin-button>
      <vaadin-button @click='${this.add}'>+</vaadin-button>
      <vaadin-button @click='${this.percent}'>%</vaadin-button>
      <vaadin-button @click='${this.divide}'>÷</vaadin-button>
      <vaadin-button @click='${this.multiply}'>x</vaadin-button>
      <vaadin-button @click='${this.subtract}'>-</vaadin-button>

      <vaadin-button id="digit" @click='${this.onChange}'>7</vaadin-button>
      <vaadin-button id="digit" @click='${this.onChange}'>8</vaadin-button>
      <vaadin-button id="digit" @click='${this.onChange}'>9</vaadin-button>
      <vaadin-button id="digit" @click='${this.onChange}'>5</vaadin-button>
      <vaadin-button id="digit" @click='${this.onChange}'>6</vaadin-button>
      <vaadin-button id="digit" @click='${this.onChange}'>4</vaadin-button>
      <vaadin-button id="digit" @click='${this.onChange}'>1</vaadin-button>
      <vaadin-button id="digit" @click='${this.onChange}'>2</vaadin-button>
      <vaadin-button id="digit" @click='${this.onChange}'>3</vaadin-button>
      <vaadin-button id="digit" @click='${this.onChange}'>0</vaadin-button>
    </div>
   `;
  }
  onChange() {
    const inputNode = this.shadowRoot.querySelector('#digit')
    this.result = [...this.result, inputNode.innerText]
  }

  digitSelect() {
    const inputNode = this.shadowRoot.querySelector('#digit')
    const inputNodeValue = inputNode.value
    const inputNode2 = this.shadowRoot.querySelector('#digit2')
    const inputNodeValue2 = inputNode2.value
    console.log(inputNodeValue - inputNodeValue2);
  }
  percent() {
    this.display = this.display / 100;
  }
  clear() {
    console.log('clear');
  }
  divide() {
    this.operator = (a, b) => a / b;
    this.previous = this.display;
    this.operatorClicked = true;
  }
  multiply() {
    this.operator = (a, b) => a * b;
    this.previous = this.display;
    this.operatorClicked = true;
  }
  subtract() {
    this.operator = (a, b) => a - b;
    this.previous = this.display;
    this.operatorClicked = true;
  }
  add() {
    this.operator = (a, b) => a + b;
    this.previous = this.display;
    this.operatorClicked = true;
  }
  equal() {
    this.display = this.operator(Number(this.previous), Number(this.display));
    this.previous = null;
    this.operatorClicked = true;
  }
}

window.customElements.define("catculator-catsys", CatculatorCatsys);
