import React from 'react';
import { withRouter } from "react-router";
import config from 'config'
import { Wrapper } from 'kaladont/styles';
import Spot from 'kaladont/components/spot/Spot';

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
      <Wrapper>
        { this.state.game.players.map(player => <Spot key={player.id} player={player}/>) }
      </Wrapper>
    );
  }
}

export default withRouter(Game);