import {createStore} from 'redux';

import PostsReducer, {PostsLoadingEvent, PostsFetchedEvent} from './exampleReducer';

describe('insanity', () => {

  let store, dispatch;

  beforeEach(() => {
    store = createStore(PostsReducer);
    dispatch = store.dispatch;
  });

  it('is based on polymorphic principles, cleaner, and far less boilerplate', () => {
    dispatch(PostsLoadingEvent.create({name: 'Daniel', age: 30}));

    expect(store.getState()).toEqual({
      friend: 'Tal',
      name: 'Daniel',
      age: 30
    });
  });

  it('merge is implicitly immutable and even CLEANER then newState', () => {
    dispatch(PostsLoadingEvent.create({name: 'Daniel', age: 30}));
    dispatch(PostsFetchedEvent.create({name: 'Noam'}));

    expect(store.getState()).toEqual({
      friend: 'Tal',
      name: 'Noam',
      age: 30
    });
  });
});
