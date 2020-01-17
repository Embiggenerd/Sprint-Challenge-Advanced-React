import React from 'react'

export const PlayerCard = ({ name, country }) => {
    return (
        <div className="player-card" data-testid="player-card">
            <h1>{name}</h1>
            <h3>{country}</h3>
        </div>
    )
}