const $ = require('jquery');

const baseURL = 'http://192.168.33.10/api/v1'

const createTeamApiService = (name) => {
	$.post(baseURL + '/team', {name : name});
}

module.exports = {
	createTeamApiService: createTeamApiService
}