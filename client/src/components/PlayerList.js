import React, { useState, useEffect } from 'react'
import { PlayerCard } from './index'
import { useSearch } from '../hooks'
export const PlayerList = ({ playerList }) => {

    

    const [query, results, handleOnChange] = useSearch(playerList)

    return (
        <div className="player-list">
            <form>
                <input onChange={handleOnChange} type="text" value={query} placeholder="search player name" />
            </form>
            {results.map(player => <PlayerCard key={player.id} {...player} />)}
        </div>
    )
}