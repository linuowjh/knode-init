module.exports = app => {
  app.router.get('/', app.cgi.home);
};