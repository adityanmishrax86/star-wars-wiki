const { gql } = require("apollo-server-core");

const typeDefs = gql`
    type Query {
        helloPeoples: People!
        # helloFilms: [Film!]!
        # helloSpecies: [Species!]!
        # helloVehicles: [Vehicle!]!
        # helloPlanets:[Planet!]!
    }

    type People {
        name: String!
        height: String!
        mass: String!
        hairColor: String!
        skinColor: String!
        eyeColor: String!
        birthYear:String!
        gender:String!
        films:[Film]
        starships:[Starships]
        species:[Species]
        vehicles:[Vehicle]
    }
    
    type Film {
        title:String!
        episode_id:Int!
        openingCrawl:String!
        director:String!
        producer:String!
        releaseDate:String!
    }

    type Species {
        name:String!
        clasification:String!
        designation:String!
        averageHeight:String!
        averageLifespan:String!
        hairColor: String!
        skinColor: String!
        eyeColor: String!
        language:String!
        homeworld:String!
    }

    type Vehicle {
        name: String!
        model:String!
        vehicleClass:String!
        manufacturer:String!
        length:String!
        costInCredits:String!
        crew:String!
        passengers:String!
        maxAtmosphericSpeed:String!
        cargoCapacity:String!
        consumables:String!
    }

    type Starships {
        name:String!
        model:String!
        starshipClass:String!
        manufacturer:String!
        length:String!
        costInCredits:String!
        crew:String!
        passengers:String!
        maxAtmosphericSpeed:String!
        cargoCapacity:String!
        consumables:String!
        hyperdriveRating: String!
        MGLT: String!
    }

    type Planet {
        name: String!
        diameter:String!
        rotationPeriod:String!
        orbitalPeriod:String!
        gravity:String!
        population:String!
        climate:String!
        terrain:String!
        surfaceWater:String!
    }
`

module.exports = {
    typeDefs
}