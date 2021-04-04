const fetch = require('node-fetch');

const fetchData = _ => {
    const promises = _.map(async (v) => {
        const res = await fetch(v)
        return res.json();
    })
    return Promise.all(promises)
}

module.exports = { fetchData }