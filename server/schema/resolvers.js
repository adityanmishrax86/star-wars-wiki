const fetch = require('node-fetch');

const fetchData = _ => {
    const promises = _.map(async (v) => {
        const res = await fetch(v)
        return res.json();
    })
    return Promise.all(promises)
}

const resolvers = {
    Query: {
        helloPeoples: async (_, args, { dataSources }) => {
            return dataSources.peopleAPI.getPeoples();
        }
    },
    People: {
        films: ({ films }) => fetchData(films),
        vehicles: ({ vehicles }) => fetchData(vehicles),
        species: ({ species }) => fetchData(species),
        starships: ({ starships }) => fetchData(starships)
    }
}

module.exports = resolvers