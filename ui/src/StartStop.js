import React, {Component} from 'react';
import {Input, Icon, Button} from 'semantic-ui-react';

class StartStop extends Component {
  state = {elapsedTime: '--:--'};
  onStart() {}
  onPause() {}
  onReset() {}
  onSubmit() {}
  render() {
    return (
      <Input iconPosition='left' placeholder={`${this.state.elapsedTime} / ${this.props.targetTime || '--:--'}`} action>
        <Icon name='clock' />
        <input />
        <Button negative disabled={this.props.mayStop} onClick={() => this.props.onStop()} icon><Icon name='stop' />Stop</Button>
      </Input>
    );
  }
}

export default StartStop;
