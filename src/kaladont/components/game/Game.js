import React from 'react';
import { withRouter } from "react-router";
import config from 'config'

class Game extends React.Component {
  state = {
    game: {
      players: []
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`${config.api}/v1/games/${id}`)
    .then(r => r.json())
    .then(game => this.setState({ game }))
  }
  render() {
    window.xd = this;
    return (
      <div>
        { this.state.game.players.map(player => <span key={player.id}>{player.name}</span>) }
      </div>
    );
  }
}

export default withRouter(Game);