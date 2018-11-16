import React from 'react';
import Path from './components/Path/Path';
import config from 'config';
import { Wrapper, UnSelectableLines, UnSelectableName, Content } from './styles';

class WhereScreen extends React.Component {
  state = {
    completed: 0
  }

  componentDidMount() {
    fetch(config.api)
    .then(res => res.json())
    .then(res => {
      this.setState({
        completed: res.completed
      }, () => console.log(this.state));
    })
    .catch(() => {})
  }

  render() {
    return (
      <Wrapper>
        <UnSelectableLines/>
        <UnSelectableName>Where</UnSelectableName>
        <Content>
          <Path completed={this.state.completed}/>
        </Content>
      </Wrapper>
    );
  }
}

export default WhereScreen;
