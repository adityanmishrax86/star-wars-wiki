import React from 'react'

export default function FilmsList({ title, director, producer, release_date, opening_crawl }) {
    return (
        <div className="my-4 px-4">
            <h4>{title}</h4>
            <dl className="row">
                <dt className="col-sm-3">Directed By</dt>
                <dd className="col-sm-9">{director}</dd>

                <dt className="col-sm-3">Produced By</dt>
                <dd className="col-sm-9">{producer}</dd>


                <dt className="col-sm-3">Releasd on</dt>
                <dd className="col-sm-9">{release_date}</dd>

                <dt className="col-sm-3 text-truncate">opening_crawl</dt>
                <dd className="col-sm-9">{opening_crawl}</dd>
            </dl>
        </div>
    )
}
