import React, {Component} from 'react';
import {Container, Segment, Grid, Divider, Form, Message, Header, Icon, Input, Button} from 'semantic-ui-react';

class LandingView extends Component {
  state = {roomId: '', joinButtonDisabled: true, joinError: false};

  roomIdInput(value) {
    this.setState({roomId: value, joinButtonDisabled: value.length === 0});
  }

  async onJoin() {
    var res = await fetch(`/api/room?room=${encodeURIComponent(this.state.roomId)}`);
    if (res.ok) {
      this.props.setRoom(this.state.roomId);
    }
    this.setState({joinError: !res.ok});
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
          <Form error={this.state.joinError}>
            <Input iconPosition='left' placeholder='Room ID' action fluid>
              <Icon name='users' />
              <input onInput={e => this.roomIdInput(e.target.value)} />
              <Button primary disabled={this.state.joinButtonDisabled} onClick={() => this.onJoin(this.state.roomId)}>Join Room</Button>
            </Input>
            <Message error header='Invalid Room ID' content="Please double-check that you've correctly entered a valid Room ID. We recommend that you scan a QR code provided by your timer." />
          </Form>
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
