import React, {Component} from 'react';
import {Container, Segment, Grid, Divider, Header, Icon, Search, Button} from 'semantic-ui-react';

class LandingView extends Component {
  state = {roomId: ''};

  roomIdInput(value) {
    this.setState({roomId: value});
  }

  onJoin() {
    fetch(`/api/room?room=${encodeURIComponent(this.state.roomId)}`)
      .then(() => this.props.setRoom(this.state.roomId))
      .catch(console.error);
  }

  onCreate() {
    fetch(`/api/room`, {method: 'POST'})
      .then(res => res.json())
      .then(body => this.props.setRoom(body.roomId))
      .catch(console.error);
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
