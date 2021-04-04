const { fetchData } = require("../services/fetchData");

const resolvers = {
    Query: {
        helloPeople: async (_, { v, type }, { dataSources }) => {
            return dataSources.mainAPI.getData(v, type);
        },
        helloPeoples: async (_, { type }, { dataSources }) => {
            return dataSources.mainAPI.getAllData(type);
        },
        helloFilm: async (_, { v, type }, { dataSources }) => {
            return dataSources.mainAPI.getData(v, type);
        },
        helloFilms: async (_, { type }, { dataSources }) => {
            return dataSources.mainAPI.getAllData(type);
        },
        helloSpecies: async (_, { v, type }, { dataSources }) => {
            return dataSources.mainAPI.getData(v, type);
        },
        helloSpecieses: async (_, { type }, { dataSources }) => {
            return dataSources.mainAPI.getAllData(type);
        },
        helloVehicle: async (_, { v, type }, { dataSources }) => {
            return dataSources.mainAPI.getData(v, type);
        },
        helloVehicles: async (_, { type }, { dataSources }) => {
            return dataSources.mainAPI.getAllData(type);
        },
        helloPlanet: async (_, { v, type }, { dataSources }) => {
            return dataSources.mainAPI.getData(v, type);
        },
        helloPlanets: async (_, { type }, { dataSources }) => {
            return dataSources.mainAPI.getAllData(type);
        },
        helloStarship: async (_, { v, type }, { dataSources }) => {
            return dataSources.mainAPI.getData(v, type);
        },
        helloStarships: async (_, { type }, { dataSources }) => {
            return dataSources.mainAPI.getAllData(type);
        },

    },

    People: {
        films: ({ films }, __, { dataSources }) => fetchData(films, dataSources),
        vehicles: ({ vehicles }, __, { dataSources }) => fetchData(vehicles, dataSources),
        species: ({ species }, __, { dataSources }) => fetchData(species, dataSources),
        starships: ({ starships }, __, { dataSources }) => fetchData(starships, dataSources),
        homeworld: async ({ homeworld }, __, { dataSources }) => {
            return dataSources.mainAPI.getHomeWorld(homeworld)
        }
    },
    Film: {
        species: ({ species }, __, { dataSources }) => fetchData(species, dataSources),
        starships: ({ starships }, __, { dataSources }) => fetchData(starships, dataSources),
        vehicles: ({ vehicles }, __, { dataSources }) => fetchData(vehicles, dataSources),
        charachters: ({ charachters }, __, { dataSources }) => fetchData(charachters, dataSources),
        planets: ({ planets }, __, { dataSources }) => fetchData(planets, dataSources),
    },
    Species: {
        homeworld: async ({ homeworld }, __, { dataSources }) => {
            return dataSources.mainAPI.getHomeWorld(homeworld)
        },
        people: ({ people }, __, { dataSources }) => fetchData(people, dataSources),
        films: ({ films }, __, { dataSources }) => fetchData(films, dataSources),
    },
    Vehicle: {
        films: ({ films }, __, { dataSources }) => fetchData(films, dataSources),
        pilots: ({ pilots }, __, { dataSources }) => fetchData(pilots, dataSources),
    },
    Starships: {
        films: ({ films }, __, { dataSources }) => fetchData(films, dataSources),
        pilots: ({ pilots }, __, { dataSources }) => fetchData(pilots, dataSources),
    },
    Planet: {
        films: ({ films }, __, { dataSources }) => fetchData(films, dataSources),
        residents: ({ residents }, __, { dataSources }) => fetchData(residents, dataSources),
    }

}

module.exports = resolvers