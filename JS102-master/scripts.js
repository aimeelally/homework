//Use this file to implement Part One of your project

//object exercises

var animal = {};

animal.username = 'aimee';

animal['tagline'] = 'wooo';



//array exercises

var noiseArray = [];

noiseArray[1] = 'woof';
	
noiseArray.push('meow');

noiseArray.push('tweet');

noiseArray['cow noise'] = 'moo';

// console.log(noiseArray);
// console.log(noiseArray.length);
// console.log(noiseArray.length - 1);

var noises = [noiseArray];

//console.log(noises);

animal['noises'] = noises;

var i = 0;

for(var key in animal){
	i++;
	if(key === 'username'){
		//console.log('my name is ' + animal['username']);
	}
	else if(key === 'tagline'){
		//console.log('i say ' + animal['tagline']);
	}
}

//console.log(animal);





var animals = [];

animals = [animal];

var quackers = animals['quackers'];

//console.log(quackers);


////// functions ///////

var AnimalTestUser = function(username, otherArgs){
	// console.log(arguments.length);
	

	var i = 0;
	if(arguments.length > 1){
		for(var key in AnimalTestUser){
			console.log(AnimalTestUser[key]);
		}

	}


	// if(arguments.length > 1){
	// 	var otherArgs = [arguments != i];
	// 	o
	// 	console.log(otherArgs);
	// }

	return {
		username : username
	};


	
}

var testSheep = AnimalTestUser('cottonball',{'loves dancing':true}, [1,2,3]);
// console.log(testSheep);

// var AnimalCreator = function(username, species, tagline, noises){
// 	return {
// 		username:username,
// 		species:species,
// 		tagline:tagline,
// 		noises:[noises],
// 		friends:[]
// 	}
// }

// var sheep = AnimalCreator('cloud','sheep','you can count on me',['baaaah','aaaaaarrrgh','cheewchewchew']);
// console.log(sheep);

// var addFriend = function(){

// }






















