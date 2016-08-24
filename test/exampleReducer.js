import _ from 'lodash';
import {Reducer, Event} from './../src/index';

export const initialState = {
  todos: {}
};

class TodosEvent extends Event {
  static prefix = 'no.more.switch.statements.todos.';
}

export class AddTodoEvent extends TodosEvent {
  newState(oldState) {
    return _.merge({}, oldState, {todos: this.params});
  }
}

export class AddTodoUsingMergeEvent extends TodosEvent {
  merge(oldState) {
    return {todos: this.params};
  }
}

export class RemoveTodoEvent extends TodosEvent {
  newState(oldState) {
    return {
      ...oldState,
      todos: _.omit(oldState.todos, this.params)
    };
  }
}

const TodosReducer = Reducer.create(initialState, TodosEvent);
export default TodosReducer;
