const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://youtube-landing-clone.herokuapp.com',
      changeOrigin: true,
    })
  );
};