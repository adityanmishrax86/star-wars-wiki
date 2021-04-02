import React from 'react'

export default function PlanetList({ climate, population, name, terrain }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Population: {population}</p>
            <p>Terrain: {terrain}</p>
            <p>Climate: {climate}</p>

        </div>
    )
}
