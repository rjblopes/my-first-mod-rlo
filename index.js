/**
 * APP Useful Utils
 *
 *
 */

// Logical functions

function orCompare(){

	var res = false;

	for (var i = 0; i < arguments.length; i++){
		res = res || arguments[i];
	}

	return res;

}

function andCompare(){

	var res = true;

	for (var i = 0; i < arguments.length; i++){
		res = res && arguments[i];
	}

	return res;

}

const logicalFn = { OR: orCompare, or: orCompare, AND: andCompare, and: andCompare };

module.exports = {
	orCompare,
	andCompare,
	logicalFn
};
