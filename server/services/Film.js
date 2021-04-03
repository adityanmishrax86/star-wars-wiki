const { RESTDataSource } = require("apollo-datasource-rest");

class FilmAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = "https://swapi.dev/api/"
    }

    async getFilms() {
        return this.get()
    }
}

module.exports = FilmAPI;