var restify = require('restify');

var server = restify.createServer({
  name: 'mun-node-https-redirect',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('.*', function (req, res, next) {
  res.redirect('https://' + req.headers.host + req.url, next);
});

server.listen(80, function () {
  console.log('%s listening at %s', server.name, server.url);
});
