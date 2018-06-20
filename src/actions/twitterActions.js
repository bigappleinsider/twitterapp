import axios from 'axios';
import { API_ENDPOINT } from '../constants/api';

export const RECEIVE_TWITS = 'RECEIVE_TWITS';
export const LOADING = 'LOADING';

export const fetchSearchTwits = search => async dispatch => {
  dispatch({
    type: LOADING,
  });
  const { data } = await axios.get(`${API_ENDPOINT}/search`, {
    params: { search },
  });
  return dispatch({
    type: RECEIVE_TWITS,
    payload: data,
  });
};
