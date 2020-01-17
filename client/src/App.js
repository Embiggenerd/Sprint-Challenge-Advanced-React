import React from 'react';
import './App.css';
import axios from 'axios'
import { PlayerList } from './components';


class App extends React.Component {
  constructor() {
    super()
    this.state = { players: [] }
  }

  componentDidMount() {
    const getPlayers = async () => {
      const { data } = await axios.get('http://localhost:5000/api/players')
      this.setState({ players: data })
    }

    getPlayers()
  }

  render() {
    return (
      <div className="App">
     <PlayerList playerList={this.state.players}/>
      </div>
    )
  }
}
export default App;
