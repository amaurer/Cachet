
var cache = {};

exports.setCache = function(name, value, duration){
	
	return cache[name] = {
		name : name,
		value : value,
		duration : getNormalizedEpoch(duration)
	};

	function getNormalizedEpoch(d){
		var returnValue = new Date();
		switch(typeof d){
			case 'Date' :
				/* Use d and call get hours for epoch time */
				returnValue = d;
				break;
			case 'float' :
				/* If duration is Float then add hours to current Date */
			case 'number' :
				/* If duration is Int then add hours to current Date */
				returnValue.setTime(returnValue.getTime() + (d*60*60*1000)); 
				break;
			default :
				throw 'Date passed to setCache was not valid';
		};

		return returnValue.getTime();
	};

};

exports.getCache = function(name){
	return (exports.isCache(name))? cache[name] : false;
};

exports.isCache = function(name){
	if(typeof cache[name] === 'undefined') return false;
	if(new Date().getTime() > cache[name].duration){
		delete cache[name];
		return false;
	};
	return true;
};