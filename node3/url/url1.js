var url = require('url');

var curURL = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=0&acr=1&acq=nodej&qdt=0&ie=utf8&query=nodejs');

var curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL);