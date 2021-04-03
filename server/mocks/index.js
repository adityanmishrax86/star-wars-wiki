const { MockList } = require("apollo-server");

const mocks = {
    Query: () => ({
        helloPeoples: () => new MockList([2, 4])
    }),
    People: () => ({
        name: () => "Luke Skywalker",
        mass: () => "118",
        height: () => "122",
        hairColor: () => "Brown",
        skinColor: () => "White",
        eyeColor: () => "Blue",
        birthYear: () => "1997",
        gender: () => "Male"

    })
}

module.exports = mocks;