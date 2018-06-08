import React from 'react';

class App extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      booted: false
    };
  }

  render() {
    return (
      <div className="yikes">Yikes</div>
    );
  }
}

export default App;
