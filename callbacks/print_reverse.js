const getHTML = require('../http-functions');

function printReverse (html) {
  const reversedHtml = html.split('').reverse().join('');
  console.log(reversedHtml);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printReverse);