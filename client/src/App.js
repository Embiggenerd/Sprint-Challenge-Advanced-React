import React from 'react';
import './App.css';
import axios from 'axios'


class App extends React.Component {
  constructor() {
    super()
    this.state = { players: [] }
  }

  componentDidMount() {
    const getPlayers = async () => {

      const res = await axios.get('http://localhost:5000/api/players')
      console.log('players', res.data[0])
    }
    getPlayers()
  }

  render() {
    return (
      <div>
        <h1>APP</h1>
      </div>
    )
  }
}
export default App;
