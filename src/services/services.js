module.exports = {
    async fetchPlanets(setState) {
        const response = await fetch("https://swapi.dev/api/planets/")
        const planets = await response.json()
        setState(planets)
    },
    async fetchPeoples(setState) {
        const response = await fetch("https://swapi.dev/api/people/")
        const peoples = await response.json()
        setState(peoples)
    },
    async fetchMore(url, setState) {
        const response = await fetch(url)
        const pages = await response.json()
        setState(pages)
    },
    async fetchMoreMeansMore(url, setState) {
        const response = await fetch(url)
        const moreData = await response.json()
        setState(moreData)
    }
}