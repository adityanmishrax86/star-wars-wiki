const fetchData = (_, dataSources) => {
    const promises = _.map(async (v) => {
        const res = await dataSources.mainAPI.getSomeData(v)
        return res;
    })
    return Promise.all(promises)
}

module.exports = { fetchData }