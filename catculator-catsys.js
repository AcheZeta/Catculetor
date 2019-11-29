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
        type: Number
      },
      digit: {
        type: Array
      },
      history: {
        type: Array
      }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.history = [];
    this.result = 0;
    this.memory = []
  }

  render() {
    return html `
    <div class="container">
      
    <div class='display'>
      <vaadin-text-field value="${this.result}"></vaadin-text-field>
    </div>

      <vaadin-button @click='${this.clear}'>C</vaadin-button>
      <vaadin-button @click='${this.clearAll}'>CE</vaadin-button>
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
      <vaadin-button class="digit" @click='${this.equal}'>=</vaadin-button>
    </div>
   `;
  }
  eventClick(event){
    const key = event.currentTarget.innerText
    this.history = [...this.history, key];
    this.result = Number(this.history.join(''))
  }
  clear(){
    this.history = []
  }
  clearAll(){
    this.memory = []
    this.history = []
    this.result = 0
  }
  operator(event){
    const operatorNum = event.currentTarget.innerText
    const numberJoin = Number(this.history.join(''))
    console.log(`numberjoin ${numberJoin}`)
    this.memory = [...this.memory, numberJoin]
    this.clear()
    console.log(operatorNum, this.memory);
    this.doOperation(operatorNum, this.memory)
    
  }
  doOperation(operator, memory){
    this.result = this.memory.reduce(this.reducer)
    console.log(this.result)
  }
  reducer(accumulator, currentValue) {
    return accumulator + currentValue;
  }
}

window.customElements.define("catculator-catsys", CatculatorCatsys);
