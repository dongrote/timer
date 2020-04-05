import React, {Component, createRef} from 'react';
import {Container, Segment, Divider, Form, Message, Icon, Input, Button} from 'semantic-ui-react';

const sanitizeRoomIdInput = roomId => {
  const sanitizedCharacters = [];
  for(var i = 0; i < roomId.length; i++) {
    const c = roomId.charAt(i);
    if (c >= '0' && c <= '9') {
      sanitizedCharacters.push(c);
      continue;
    }
    if (c >= 'a' && c <= 'f') {
      sanitizedCharacters.push(c.toUpperCase());
    }
    if (c >= 'A' && c <= 'F') {
      sanitizedCharacters.push(c);
    }
  }
  return sanitizedCharacters.slice(0, 5).join('');
};

class LandingView extends Component {
  inputRef = createRef();
  state = {roomId: '', joinButtonDisabled: true, joinError: false};

  roomIdInput(value) {
    const roomId = sanitizeRoomIdInput(value);
    this.setState({roomId, joinButtonDisabled: roomId.length === 0});
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

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <Container text>
        <Segment textAlign='center'>
          <Form error={this.state.joinError} fluid>
            <Input ref={this.inputRef} iconPosition='left' placeholder='Room ID' size='big'>
              <Icon name='users' />
              <input
                onInput={e => this.roomIdInput(e.target.value)}
                value={this.state.roomId}
              />
            </Input>
            <Message error header='Invalid Room ID' content="Please double-check that you've correctly entered a valid Room ID. We recommend that you scan a QR code provided by your timer." />
            <Button primary fluid size='big' disabled={this.state.joinButtonDisabled} onClick={() => this.onJoin(this.state.roomId)}>Join Room</Button>
          </Form>
          <Divider horizontal>Or</Divider>
          <Button fluid size='big' icon labelPosition='left' primary onClick={() => this.onCreate()}>
            <Icon name='add' />
            Create a new room
          </Button>
        </Segment>
      </Container>
    );
  }
}

export default LandingView;
