import React, {Component} from 'react';
import {Grid, Input, Icon, Button} from 'semantic-ui-react';

class TimeInput extends Component {
  state = {timeString: '0:00'};
  updateTime(time) {
    let stripped = '';
    for(var i=0; i<time.length; i++) {
      const c = time.charAt(i);
      if (c >= '0' && c <= '9') {
        stripped += c;
      }
    }
    const seconds = stripped.length > 0 ? Number(stripped.slice(-2)) : 0,
      secondsString = seconds > 9 ? `${seconds}` : `0${seconds}`,
      minutes = stripped.length > 2 ? Number(stripped.slice(0,-2)) : 0;
    this.setState({
      timeString: `${minutes}:${secondsString}`,
      timeInSeconds: seconds + (minutes * 60),
    });
  }
  render() {
    return (
      <Grid columns={3} stackable>
        <Grid.Column textAlign='center'>
          <Input iconPosition='left' action placeholder='0:00'>
            <Icon name='clock' />
            <input onInput={e => this.updateTime(e.target.value)} value={this.state.timeString} />
            <Button primary type='submit' onClick={() => this.props.onSubmit(this.state.timeInSeconds)}>Set</Button>
          </Input>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Button secondary onClick={() => this.props.onSubmit(3 * 60)}>Evaluation</Button>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Button secondary onClick={() => this.props.onSubmit(2 * 60)}>Table Topics</Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default TimeInput;
