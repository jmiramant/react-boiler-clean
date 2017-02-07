/* eslint-disable global-require */

export default {

  path: '/',

  // ordered
  children: [
    require('./home').default,
    require('./login').default,
    require('./privacy').default,
    //last
    require('./notFound').default,
  ],

  async action({ next }) {
    const route = await next();

    route.title = `${route.title || 'Untitled Page'}`;
    route.description = route.description || '';

    return route;
  },

};
