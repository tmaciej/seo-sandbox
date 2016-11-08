export default {
  path: '/',

  children: [
    require('./Home').default,
    require('./Subpage').default,

    // place new routes before
    require('./NotFound').default
  ],

  async action({ next }) {
    const route = await next();

    return route;
  }
};
