'use strict';

import type {Action} from '../Actions/types';

const initialState = {
  isLoggedIn: false,
  accessToken: ''
};

function user(state = initialState, action: Action): State {
  if (action.type === 'LOGGED_IN') {
    return {
      isLoggedIn: true,
      accessToken: action.accessToken
    };
  }
  if (action.type === 'LOGGED_OUT') {
    return initialState;
  }

  return state;
}

module.exports = user;