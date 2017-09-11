const https = require('https');

function getHTML (options, callback) {
  let output = '';

  https.get(options, function(response) {

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
      callback(output);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printHTML);