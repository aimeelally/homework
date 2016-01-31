function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(function(subUser){
    	return goodUsers.some(function(gooduser){
    		return gooduser.id === subUser.id;
    	})
    })
  };
}

module.exports = checkUsersValid