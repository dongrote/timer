import React, {Component} from 'react';
import {Container, Segment, Grid, Divider, Form, Header, Icon, Input, Button} from 'semantic-ui-react';

class LandingView extends Component {
  state = {roomId: '', joinButtonDisabled: true};

  roomIdInput(value) {
    this.setState({roomId: value, joinButtonDisabled: value.length === 0});
  }

  async onJoin() {
    await fetch(`/api/room?room=${encodeURIComponent(this.state.roomId)}`);
    this.props.setRoom(this.state.roomId);
  }

  async onCreate() {
    var res = await fetch(`/api/room`, {method: 'POST'})
    var body = await res.json();
    this.props.setRoom(body.roomId);
  }

  render() {
    return (
      <Container>
        <Segment>
          <Input iconPosition='left' placeholder='Room ID' action fluid>
            <Icon name='users' />
            <input onInput={e => this.roomIdInput(e.target.value)} />
            <Button primary disabled={this.state.joinButtonDisabled} onClick={() => this.onJoin(this.state.roomId)}>Join Room</Button>
          </Input>
          <Divider horizontal>Or</Divider>
            <Grid>
              <Grid.Row textAlign='center'>
                <Grid.Column width={16}>
                <Button icon labelPosition='left' primary onClick={() => this.onCreate()}>
                  <Icon name='add' />
                  Create a new room
                </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Segment>
      </Container>
    );
  }
}

export default LandingView;
