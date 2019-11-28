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
    this.digit = []
  }

  render() {
    return html `
    <div class="container">
      
    <div class='display'>
      <vaadin-text-field value="${this.result}"></vaadin-text-field>
    </div>

      <vaadin-button @click='${this.clear}'>C</vaadin-button>
      <vaadin-button @click='${this.operator}'>+</vaadin-button>
      <vaadin-button @click='${this.divide}'>÷</vaadin-button>
      <vaadin-button @click='${this.multiply}'>x</vaadin-button>
      <vaadin-button @click='${this.subtract}'>-</vaadin-button>

      <vaadin-button class="digit" @click='${this.eventClick}'>9</vaadin-button>

      <vaadin-button class="digit" @click='${this.eventClick}'>8</vaadin-button>
      <vaadin-button class="digit" @click='${this.eventClick}'>7</vaadin-button>
      <vaadin-button class="digit" @click='${this.eventClick}'>6</vaadin-button>

      <vaadin-button class="digit" @click='${this.eventClick}'>5</vaadin-button>
      <vaadin-button class="digit" @click='${this.eventClick}'>4</vaadin-button>
      <vaadin-button class="digit" @click='${this.eventClick}'>3</vaadin-button>
      
      <vaadin-button class="digit" @click='${this.eventClick}'>2</vaadin-button>
      <vaadin-button class="digit" @click='${this.eventClick}'>1</vaadin-button>
      <vaadin-button class="digit" @click='${this.eventClick}'>0</vaadin-button>
    </div>
   `;
  }
  eventClick(event){
    const key = event.currentTarget.innerText
    this.result = [...this.result,key];
  }
  clear(){
    this.result = []
  }
  operator(){
    const numberJoin = this.result.join('')
    this.digit = [...this.digit, numberJoin]
    this.clear()
    console.log(this.digit);
  }
}

window.customElements.define("catculator-catsys", CatculatorCatsys);
