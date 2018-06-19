import { RECEIVE_TWITS } from '../actions/twitterActions';

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch(type) {    
    case RECEIVE_TWITS:
      return {
        ...state,
        items: payload
      };
    default:
      return state;
  }
};

export default reducer;