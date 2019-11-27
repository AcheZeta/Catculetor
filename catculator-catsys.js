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
      }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.result = 0;
    this.digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  }

  render() {
    return html `
    <div id="display">
      <h1 id="display__numbers"> ${this.result} </h1>
    </div>
    <div class="keyboard">
      ${this.digit.map(digit => html `
      <vaadin-button @click="${this.digitSelect}" id="digit" value="${digit}">
        ${digit}
      </vaadin-button>
      `
      )}
    </div>
   `;
  }
  digitSelect() {
    const inputNode = this.shadowRoot.querySelector('#digit')
    console.log(inputNode.innerText);
  }
}




// <
// div class = "input-layout"
// @keyup = "${this.shortcutListener}" >
//   <
//   vaadin - text - field placeholder = "Task"
// value = "${this.task}"
// @change = "${this.updateTask}" >
//   <
//   /vaadin-text-field>

//   <vaadin-button theme = "primary" @click = "${this.addTodo}">
//   Add Todo </vaadin-button> </div >


//   <
//   div class = "todo-list" >
//   $ {
//     this.todos.map(todo => html `
//           <div class="todo-item">
//           <vaadin-checkbox ?checked="${todo.complete}" @change="${event => this.updateTodoStatus}">
//           ${todo.task}
//           </vaadin-checkbox >
//           </div>
//           `)
//   } <
//   /div>

window.customElements.define("catculator-catsys", CatculatorCatsys);
