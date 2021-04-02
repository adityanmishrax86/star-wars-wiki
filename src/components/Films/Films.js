import React from 'react'
import FilmsList from './FilmsList'

export default function Films(props) {
    return (
        <div>
            <FilmsList {...props} />
        </div>
    )
}
