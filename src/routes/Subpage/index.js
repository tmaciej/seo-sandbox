import React from 'react';
import Subpage from './Subpage';

export default {
  path: '/subpage',

  action() {
    return {
      component: <Subpage />
    };
  }
};
