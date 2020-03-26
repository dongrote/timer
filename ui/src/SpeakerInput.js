import React, {Component} from 'react';
import {Button, Input} from 'semantic-ui-react';

class SpeakerInput extends Component {
  state = {name: ''};

  render() {
    return (
      <Input fluid placeholder='Speaker' action>
        <input value={this.state.name} onInput={e => this.setState({name: e.target.value})} />
        <Button type='submit' onClick={() => this.props.onSubmit(this.state.name)}>Submit</Button>
      </Input>
    );
  }
}

export default SpeakerInput;
