const axios = require('axios');

const API = async () => {
	const options = {
		method: 'GET',
		url: 'https://netflix54.p.rapidapi.com/search/',
		params: {
			query: 'far from home',
			offset: '0',
			limit_titles: '50',
			limit_suggestions: '20',
			lang: 'en',
		},
		headers: {
			'X-RapidAPI-Key': 'd375ef8260msh34e243128d83ddfp15995fjsn971fb8c83af2',
			'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
		},
	};

	axios
		.request(options)
		.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});
};

export default API;
