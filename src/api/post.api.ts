import axios from 'axios';
import { Post } from '../common';

export const getPostById = (userId?: number): Promise<void | Post[]> => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then(res => {
    return res.data as Post[];
  }).catch( err => {
    console.log(err);
  })
};