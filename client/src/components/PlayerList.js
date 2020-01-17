import React from 'react'
import { PlayerCard } from './index'
import { useSearch, useDarkMode } from '../hooks'
export const PlayerList = ({ playerList }) => {

    const [query, results, handleOnChange] = useSearch(playerList)

    const [darkMode, setDarkMode] = useDarkMode()

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className="player-list" data-testid="player-list">
            <button onClick={toggleDarkMode}>{darkMode ? "turn of dark mode" : "turn on dark mode"}</button>
            <form>
                <input onChange={handleOnChange} type="text" value={query} placeholder="search player name" />
            </form>
            {results.map(player => <PlayerCard key={player.id} {...player} />)}
        </div>
    )
}