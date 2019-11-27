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

const VisibilityFilters = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed'
};

class CatculatorCatsys extends LitElement {

  static get properties() {
    return {
      todos: {
        type: Array
      },
      filter: {
        type: String
      },
      task: {
        type: String
      }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.todos = [];
    this.filter = VisibilityFilters.SHOW_ALL;
    this.task = '';
  }

  render() {
    return html `
        <div class="input-layout" @keyup="${this.shortcutListener}">
          <vaadin-text-field placeholder="Task" value="${this.task}" @change="${this.updateTask}">
          </vaadin-text-field>

          <vaadin-button theme="primary"
        @click = "${this.addTodo}">
          Add Todo </vaadin-button> </div>

          
          <div class="todo-list">
          ${this.todos.map(todo => html`
          <div class="todo-item">
          <vaadin-checkbox ?checked="${todo.complete}" @change="${event => this.updateTodoStatus}">
          ${todo.task}
          </vaadin-checkbox >
          </div>
          `)}
          </div>
          `;
  }


  addTodo() {
    if (this.task) {
      this.todos = [...this.todos, {
        task: this.task,
        complete: false
      }];
      this.task = '';
    }
  }

  shortcutListener(event) {
    if (event.key === 'Enter') {
      this.addTodo();
    }
  }

  updateTask(event) {
    this.task = event.target.value;
  }

}






window.customElements.define("catculator-catsys", CatculatorCatsys);
