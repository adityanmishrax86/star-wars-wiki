const { RESTDataSource } = require("apollo-datasource-rest");

class PeopleAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = "https://swapi.dev/api/"
    }

    async getPeoples() {
        return this.get(`people/1`)
    }
}

module.exports = PeopleAPI;