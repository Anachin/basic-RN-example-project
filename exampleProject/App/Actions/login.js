'use strict';

import type { Action } from './types';

function login(accessToken: string) {
  return {
    type: 'LOGGED_IN',
    accessToken
  };
}

function logout() {
  return {
    type: 'LOGGED_OUT'
  };
}

module.exports = {
  login,
  logout
};