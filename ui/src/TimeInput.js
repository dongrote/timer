import React, {Component} from 'react';
import {Grid, Input, Icon, Button} from 'semantic-ui-react';

class TimeInput extends Component {
  state = {};
  updateTime(time) {
    let stripped = '';
    time.forEach(c => {
      if (c >= '0' && c <= '9') {
        stripped += c;
      }
    });
    const seconds = stripped.length > 0 ? Number(stripped.slice(-2)) : 0,
      minutes = stripped.length > 2 ? Number(stripped.slice(0,-2)) : 0;
    this.setState({
      timeString: `${minutes}:${seconds}`,
      timeInSeconds: seconds + (minutes * 60),
    });
  }
  render() {
    return (
      <Grid columns={3} stackable>
        <Grid.Column textAlign='center'>
          <Input iconPosition='left' action placeholder='--:--'>
            <Icon name='clock' />
            <input onInput={e => this.updateTime(e.target.value)} />
            <Button type='submit' onClick={() => this.props.onSubmit(this.state.timeInSeconds)}>Submit</Button>
          </Input>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Button onClick={() => this.props.onSubmit(3 * 60)}>Evaluation</Button>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Button onClick={() => this.props.onSubmit(2 * 60)}>Table Topics</Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default TimeInput;
