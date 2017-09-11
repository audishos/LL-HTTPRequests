const https = require('https');


function getAndPrintHTML () {
  let output = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      output += data;
    });

    response.on('error', function(err) {
      if (err) {
        throw err;
      }
    });

    response.on('end', function() {
      console.log(output)
    });
  });
}

getAndPrintHTML();