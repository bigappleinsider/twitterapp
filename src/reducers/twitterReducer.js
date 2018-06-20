import { RECEIVE_TWITS, LOADING } from '../actions/twitterActions';

const initialState = {
  items: [],
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case RECEIVE_TWITS:
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default reducer;
