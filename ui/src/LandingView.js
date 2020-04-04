import React, {Component} from 'react';
import {Container, Segment, Grid, Divider, Header, Icon, Search, Button} from 'semantic-ui-react';

class LandingView extends Component {
  state = {roomId: ''};

  roomIdInput(value) {
    this.setState({roomId: value});
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
        <Segment placeholder>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header icon>
                  <Icon name='search' />
                  Join a Room
                </Header>
                <Search placeholder='Room ID' onInput={e => this.roomIdInput(e.target.value)}/>
                <Button primary onClick={() => this.onJoin(this.state.roomId)}>Join</Button>
              </Grid.Column>
              <Grid.Column>
                <Header icon>
                  <Icon name='world' />
                  Create a new room
                </Header>
                <Button primary onClick={() => this.onCreate()}>Create</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default LandingView;
