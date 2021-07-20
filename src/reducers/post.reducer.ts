import { BaseAction, actionIds, Post } from '../common';

export type PostCollectionState = {
  post?: Post[],
  errors?: Error
};

export const postCollectionReducer = (
  state: PostCollectionState = {},
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.GET_POST_BY_USER_SUCCESS:
      return {
        ...state,
        post: action.payload
      };
    case actionIds.GET_POST_BY_USER_FAIL:
      return {
        ...state,
        errors: action.payload
      };
  }
  return state;
};