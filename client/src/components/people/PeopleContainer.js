import React, { useState, useEffect } from 'react'
import { fetchMore, fetchPeoples } from "../../services/services"
import People from "./People"

export default function PeopleContainer() {

    const [peoples, setPeople] = useState([])

    const handleMoreData = (people) => {
        fetchMore(people, setPeople)
    }

    useEffect(() => {
        fetchPeoples(setPeople)
    }, [])

    return (
        <People {...peoples} handleMore={handleMoreData} />
    )
}


