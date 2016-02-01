// ## Task

// Let's build exactly the system discussed above.

// Some invalid JSON will be available on process.argv[2].

//   * Build a function called `parsePromised` that creates a promise,performs `JSON.parse` in a `try`/`catch` block, and resolves
//		 or rejects the promise depending on whether an error is thrown.
//		 **Note:** your function should synchronously return the promise!
//   * Build a sequence of steps like the ones shown above that catchesany thrown errors and logs them to the console.

var q = require('q');
var defer = q.defer(); 

function parsePromised(){
	return JSON.parse(process.argv[2]);
	// defer.promise
	// .then(JSON.parse(process.argv[2]))
	// .then(null, console.log);
}

defer.promise
.then(parsePromised)
.then(null,console.log);

defer.resolve(parsePromised);