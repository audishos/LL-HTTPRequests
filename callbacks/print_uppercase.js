const getHTML = require('../http-functions');

function printUpperCase (html) {
  console.log(html.toUpperCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printUpperCase);