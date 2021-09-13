const url = require('url');
 
const myurl = new URL('https"//example.org');
myurl.pathname = '/a/b/c';
myurl.search='?d=e';
myurl.hash = '#fgh';
console.log(myurl);