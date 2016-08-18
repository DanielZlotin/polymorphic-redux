export class Reducer {
  static create(initialState, EventClass) {
    return new Reducer(initialState, EventClass).reduce;
  }

  constructor(initialState, EventClass) {
    this.initialState = initialState;
    this.EventClass = EventClass;
    this.reduce = this.reduce.bind(this);
  }

  reduce(state = this.initialState, event) {
    if (event._instance && event._instance instanceof this.EventClass) {
      return event._instance.newState(state);
    } else {
      return state;
    }
  }
}

export class Event {
  static prefix = '';

  static create(params) {
    return {type: `${prefix}${this.name}`, _instance: new this(params)}; //eslint-disable-line
  }

  constructor(params) {
    this.params = params;
  }

  newState(oldState) {
    return {...oldState, ...this.merge(oldState)};
  }

  merge(oldState) {
    return oldState;
  }
}

