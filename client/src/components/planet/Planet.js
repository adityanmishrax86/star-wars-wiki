import React from 'react'
import PlanetList from './PlanetList'


export default function Planet({ count, next, previous, results }) {
    return (
        <div>
            All Planets
            {
                results ?
                    results.map((item) => {
                        return (
                            <PlanetList key={item.name} {...item} />
                        )
                    })
                    : <h1>No Data</h1>
            }
            <hr />
            {next && <a href={next}>Load More</a>}
        </div>
    )
}
