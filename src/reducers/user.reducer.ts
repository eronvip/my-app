import { BaseAction, User, actionIds } from '../common';

export type UserCollectionState = {
  users?: User[],
  user?: User,
  errors?: string,
};

export const userCollectionReducer = (
  state: UserCollectionState = {},
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.GET_USER_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case actionIds.GET_USER_FAIL:
      return {
        ...state,
        errors: action.payload
      };
    case actionIds.GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        user: action.payload,
        errors: '',
      };
    case actionIds.GET_USER_BY_ID_FAIL:
      return {
        ...state,
        errors: "Error"
      };
  }
  return state;
};