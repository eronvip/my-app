import { combineReducers } from 'redux';
import { postCollectionReducer, PostCollectionState } from './post.reducer';
import { userCollectionReducer, UserCollectionState } from './user.reducer';

export interface State {
  userCollection: UserCollectionState;
  postCollection: PostCollectionState;
}

export const rootReducers = combineReducers<State>({
  userCollection: userCollectionReducer,
  postCollection: postCollectionReducer,
});