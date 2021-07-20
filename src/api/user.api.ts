import axios from 'axios';
import { User } from '../common';

export const getUser = (): Promise<void | User[]> => {
  return axios.get(
    'https://jsonplaceholder.typicode.com/users'
  ).then(res => {
    return res.data as User[];
  }).catch(err => {
    console.log(err);
  })
};

export const getUserById = (id: number): Promise<void | User> => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then(res => {
    return res.data as User;
  }).catch(err => {
    console.log(err);
  })
};