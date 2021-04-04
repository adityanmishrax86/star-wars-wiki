const { RESTDataSource } = require("apollo-datasource-rest");

class MainAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = "https://swapi.dev/api/"
    }

    async getData(v, type) {
        return this.get(`${type}/${v}`)
    }

    async getAllData(type) {
        return this.get(type);
    }

    async getHomeWorld(v) {
        this.baseURL = "";
        return this.get(v);
    }

    async getSomeData(v) {
        this.baseURL = "";
        return this.get(v);
    }

}

module.exports = MainAPI;