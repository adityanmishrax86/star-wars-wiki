import React, { useState, useEffect } from 'react'
import { fetchPlanets } from "../../services/services"
import Planet from "./Planet"

export default function PlanetContainer() {

    const [planet, setPlanet] = useState([])

    useEffect(() => {

        fetchPlanets(setPlanet)
    }, [])

    return (
        <Planet {...planet} />
    )
}


