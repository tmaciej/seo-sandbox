import React from 'react';
import NotFound from './NotFound';

export default {
  path: '*',

  action() {
    return {
      component: <NotFound />,
      status: 404
    };
  }
};
