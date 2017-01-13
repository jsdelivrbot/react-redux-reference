import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=lukebergen-react-redux-reference';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: FETCH_POSTS, payload: data });
    });
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: CREATE_POST, payload: data });
    });
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: FETCH_POST, payload: data });
    });
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: DELETE_POST, payload: data });
    });
  };
}
