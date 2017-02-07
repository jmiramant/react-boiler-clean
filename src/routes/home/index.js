import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

export default {

  path: '/',

  action() {
    return {
      component: <Layout><Home /></Layout>,
    };
  },

};
