export const actionIds = {
  GET_USER: 'GET_USER',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAIL: 'GET_USER_FAIL',
  GET_USER_BY_ID: 'GET_USER_BY_ID',
  GET_USER_BY_ID_SUCCESS: 'GET_USER_BY_ID_SUCCESS',
  GET_USER_BY_ID_FAIL: 'GET_USER_BY_ID_FAIL',
  GET_POST_BY_USER: 'GET_POST_BY_USER',
  GET_POST_BY_USER_SUCCESS: 'GET_POST_BY_USER_SUCCESS',
  GET_POST_BY_USER_FAIL: 'GET_POST_BY_USER_FAIL',
};

export interface BaseAction {
  type: string;
  payload?: any;
}

export interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}