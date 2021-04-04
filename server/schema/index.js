const { gql } = require("apollo-server-core");

const typeDefs = gql`
    type Query {
        # For single values
        helloPeople(v:Int!, type:String!): People!
        helloFilm(v:Int!, type:String!): Film!
        helloSpecies(v:Int!, type:String!): Species!
        helloVehicle(v:Int!, type:String!): Vehicle!
        helloPlanet(v:Int!, type:String!):Planet!
        helloStarship(v:Int!, type:String!): Starships!

        # For more values
        helloPeoples(type:String!): All
        helloFilms(type:String!): All
        helloPlanets(type:String!): All
        helloSpecieses(type:String!): All
        helloStarships(type:String!): All
        helloVehicles(type:String!): All
    }

    type All {
        count:Int!
        next:String
        previous:String
        results: [People!]!
    }

    type People {
        name: String!
        height: String!
        mass: String!
        hair_color: String!
        skin_color: String!
        eye_color: String!
        birth_year:String!
        gender:String
        films:[Film]
        starships:[Starships]
        species:[Species]
        vehicles:[Vehicle]
        homeworld:Planet
    }
    
    type Film {
        title:String!
        episode_id:Int!
        opening_crawl:String!
        director:String!
        producer:String!
        release_date:String!
        starships:[Starships]
        species:[Species]
        vehicles:[Vehicle]
        charachters:[People]
        planets:[Planet]
    }

    type Species {
        name:String!
        clasification:String!
        designation:String!
        average_height:String!
        average_lifespan:String!
        hair_colors: String!
        skin_colors: String!
        eye_colors: String!
        language:String!
        homeworld:Planet
        people:[People]
        films:[Film]
    }

    type Vehicle {
        name: String!
        model:String!
        vehicle_class:String!
        manufacturer:String!
        length:String!
        cost_in_credits:String!
        crew:String!
        passengers:String!
        max_atmosphering_speed:String!
        cargo_capacity:String!
        consumables:String!
        films:[Film]
        pilots:[People]
    }

    type Starships {
        name:String!
        model:String!
        starship_class:String!
        manufacturer:String!
        length:String!
        cost_in_credits:String!
        crew:String!
        passengers:String!
        max_atmosphering_speed:String!
        cargo_capacity:String!
        consumables:String!
        hyperdriveRating: String!
        MGLT: String!
        films:[Film]
        pilots:[People]
    }

    type Planet {
        name: String!
        diameter:String!
        rotation_period:String!
        orbital_period:String!
        gravity:String!
        population:String!
        climate:String!
        terrain:String!
        surface_water:String!
        residents:[People]
        films:[Film]
    }
`

module.exports = {
    typeDefs
}