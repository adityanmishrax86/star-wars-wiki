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
        films: ({ films }, __, { dataSources }) => {
            const res = films.map(async (v) => {
                const reslt = await dataSources.mainAPI.getSomeData(v);
                return reslt;
            })
            return Promise.all(res);
        }
    },
    // People: {
    //     films: ({ films }) => fetchData(films),
    //     vehicles: ({ vehicles }) => fetchData(vehicles),
    //     species: ({ species }) => fetchData(species),
    //     starships: ({ starships }) => fetchData(starships),
    //     homeworld: async ({ homeworld }, __, { dataSources }) => {
    //         return dataSources.mainAPI.getHomeWorld(homeworld)
    //     }
    // },
    Film: {
        species: ({ species }) => fetchData(species),
        starships: ({ starships }) => fetchData(starships),
        vehicles: ({ vehicles }) => fetchData(vehicles),
        charachters: ({ charachters }) => fetchData(charachters),
        planets: ({ planets }) => fetchData(planets),
    },
    Species: {
        homeworld: async ({ homeworld }, __, { dataSources }) => {
            return dataSources.mainAPI.getHomeWorld(homeworld)
        },
        people: ({ people }) => fetchData(people),
        films: ({ films }) => fetchData(films),
    },
    Vehicle: {
        films: ({ films }) => fetchData(films),
        pilots: ({ pilots }) => fetchData(pilots),
    },
    Starships: {
        films: ({ films }) => fetchData(films),
        pilots: ({ pilots }) => fetchData(pilots),
    },
    Planet: {
        films: ({ films }) => fetchData(films),
        residents: ({ residents }) => fetchData(residents),
    }

}

module.exports = resolvers