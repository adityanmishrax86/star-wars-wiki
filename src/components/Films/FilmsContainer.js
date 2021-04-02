import React, { useState, useEffect } from 'react'
import { fetchMoreMeansMore } from "../../services/services"
import Films from "./Films"

export default function FilmsListContainer(props) {

    const [films, setFilms] = useState([])
    useEffect(() => {

        fetchMoreMeansMore(props.url, setFilms)
    }, [])

    return (
        <>
            <Films {...films} />
        </>

    )
}


