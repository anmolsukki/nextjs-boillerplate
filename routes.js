const routes = require('next-routes');

module.exports = routes()
  .add('portfolioNew', '/portfolios/new')
  .add('portfolioEdit', '/portfolios/:id/edit');
