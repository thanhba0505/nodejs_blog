const siteRouter = require('./site');
const newsRouter = require('./news');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
  app.use('/news', newsRouter);

  app.use('/me', meRouter);

  app.use('/courses', coursesRouter);

  app.use('/', siteRouter);
}

module.exports = route;
