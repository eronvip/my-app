import { BaseAction, actionIds, Post } from '../common';

export const getPostByUserAction = (userId: number): BaseAction => ({
  type: actionIds.GET_POST_BY_USER,
  payload: userId,
});

export const getPostByUserSuccessAction = (
  post: Post[]
): BaseAction => ({
  type: actionIds.GET_POST_BY_USER_SUCCESS,
  payload: post,
});

export const getPostByUserFailAction: () => BaseAction = () => ({
  type: actionIds.GET_POST_BY_USER_FAIL,
});