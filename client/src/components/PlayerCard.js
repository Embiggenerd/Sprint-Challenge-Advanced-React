import React from 'react'

export const PlayerCard = ({ name, country }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h3>{country}</h3>
        </div>
    )
}