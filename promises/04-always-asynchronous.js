var q = require('q');
var defer = q.defer(); 

defer.promise.then(console.log('FIRST'));

defer.resolve('SECOND');