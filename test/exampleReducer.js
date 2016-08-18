import {Reducer, Event} from './../src/index';

const initialState = {
  friend: 'Tal',
  name: undefined,
  age: undefined
};

class PostsEvent extends Event {
  static prefix = 'wix.feed.posts.';
}

export class PostsLoadingEvent extends PostsEvent {
  newState(oldState) {
    return {
      ...oldState,
      name: this.params.name,
      age: this.params.age
    };
  }
}

export class PostsFetchedEvent extends PostsEvent {
  merge(oldState) {
    return {
      name: this.params.name
    };
  }
}

const postsReducer = Reducer.create(initialState, PostsEvent);
export default postsReducer;
