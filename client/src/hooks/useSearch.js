import {useState, useEffect} from 'react'

export const useSearch = (playerList) => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    const handleOnChange = (event) => {
        setQuery(event.target.value)
    }

    useEffect(() => {
        setResults(playerList)
    }, [playerList])

    useEffect(() => {
        setResults(
            playerList.filter(player => player.name.toLowerCase().includes(query.toLowerCase()))
        )
    }, [query])

    return [query, results, handleOnChange]
}