'use strict';

export type Action = 
  	{ type: 'LOGGED_IN', accessToken: string}
  | { type: 'LOGGED_OUT' }