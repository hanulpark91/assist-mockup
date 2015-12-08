var http = require('http');
var fs = require('fs');
var pg = require('pg');

/*pg.connect(process.env.DATABASE_URL, function(err,client){
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});*/

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h1>Hello World</h1>');
});

var port = Number(process.env.PORT || 3000);

server.listen(port);