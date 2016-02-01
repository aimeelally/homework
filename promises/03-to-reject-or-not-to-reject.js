// Create a promise using `Q.defer`
//   * Pass `console.log` as the first **and** second argument to your promise's`then` method
//   * Resolve the promise with a value of `"I FIRED"`
//   * Reject the promise with a value of `"I DID NOT FIRE"`

// If successful, your script should only log "I FIRED" and should not log
// "I DID NOT FIRE".

var q = require('q');
var defer = q.defer(); 

defer.promise.then(console.log, console.log);
defer.resolve('I FIRED');
defer.reject('I DID NOT FIRE');

