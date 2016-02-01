// ## Task

// Construct a promise chain that returns values to prove to yourself
// that promise handlers will wrap your returned values in promises
// allowing additional chaining.

//   * Construct a promise using Q's `defer()`
//   * Construct a function `attachTitle` which prepends `"DR. "` toits first argument and returns the result.
//   * Build a promise chain off the promise we constructed initiallythat first calls `attachTitle` then calls `console.log`.
//   * Resolve the promise you created with a value of `"MANHATTAN"`.

// If your program runs successfully, it should print out "DR. MANHATTAN"
// which is extremely exciting.

var q = require('q');
var defer = q.defer(); 

function attachTitle(arg){
	return 'DR. ' + arg;
}

defer.promise
.then(attachTitle)
.then(console.log);

defer.resolve('MANHATTAN');