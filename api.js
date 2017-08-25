var api = {
	getRovers(){
		var url='https://jsonplaceholder.typicode.com/posts/'
		return fetch(url).then((res) => res.json());
	}
};

module.exports = api;