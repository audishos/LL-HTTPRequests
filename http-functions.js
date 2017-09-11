module.exports = function getHTML (options, callback) {
  const https = require('https');
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