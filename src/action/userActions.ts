import { BaseAction, User, actionIds } from '../common';

export const getUserAction = (): BaseAction => ({
  type: actionIds.GET_USER,
});

export const getUserSuccessAction = (
  user: User[]
): BaseAction => ({
  type: actionIds.GET_USER_SUCCESS,
  payload: user,
});

export const getUserFailAction: () => BaseAction = () => ({
  type: actionIds.GET_USER_FAIL,
});

export const getUserByIdAction = (id: number): BaseAction => ({
  type: actionIds.GET_USER_BY_ID,
  payload: id,
});

export const getUserByIdSuccessAction = (
  user: User[]
): BaseAction => ({
  type: actionIds.GET_USER_BY_ID_SUCCESS,
  payload: user,
});

export const getUserByIdFailAction: () => BaseAction = () => ({
  type: actionIds.GET_USER_BY_ID_FAIL,
});