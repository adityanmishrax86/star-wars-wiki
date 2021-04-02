import { MDBBtn } from 'mdbreact'
import React from 'react'
import PeopleList from './PeopleList'

export default function People({ count, next, previous, results, handleMore }) {
    return (
        <div>
            {next && <MDBBtn onClick={() => handleMore(next)}>Next</MDBBtn>}
            {previous && <MDBBtn onClick={() => handleMore(previous)}>Previous</MDBBtn>}
            {
                results ?
                    results.map((item) => {
                        return (
                            <PeopleList key={item.name} {...item} />
                        )
                    })
                    : <h1>No Data</h1>
            }
            <hr />

        </div>
    )
}
