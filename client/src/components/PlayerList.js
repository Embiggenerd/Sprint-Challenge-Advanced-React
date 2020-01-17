import React, { useState, useEffect } from 'react'
import { PlayerCard } from './index'

export const PlayerList = ({ playerList }) => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    const handleOnChange = (event) => {
        setQuery(event.target.value)
        setResults(
            playerList.filter(player => player.name.toLowerCase() === query.toLowerCase())
        )
    }

    useEffect(()=>{
        setResults(playerList)
    },[playerList])

    return (
        <div className="player-list">
            <form>
                <input onChange={handleOnChange} type="text" value={query} placeholder="search player name" />
            </form>
            {playerList.map(player => <PlayerCard key={player.id} {...player} />)}
        </div>
    )
}