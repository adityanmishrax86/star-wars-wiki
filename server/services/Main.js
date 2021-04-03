const { RESTDataSource } = require("apollo-datasource-rest");

class MainAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = ""
    }

    async getFilms(value) {
        return this.get(value)
    }
}

module.exports = MainAPI;