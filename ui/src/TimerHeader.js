import React from 'react';
import {Segment, Form, Header, Button, Icon, Input, Grid, Divider} from 'semantic-ui-react';
import StartStop from './StartStop';

export default props => (
  <Segment>
    <Grid stackable columns={3}>
      <Grid.Column>
        <Input label='Speaker' placeholder='speaker' />
      </Grid.Column>
      <Grid.Column>
        <Grid.Row>
          <Input iconPosition='left' action>
            <Icon name='clock'/>
            <input type='tel' placeholder='--:--' />
            <Button type='submit' onClick={() => props.configure(this.state)}>Custom</Button>
          </Input>
        </Grid.Row>
        <Divider></Divider>
        <Grid.Row centered columns={2} textAlign='justified'>
          <Button>Evaluation</Button>
          <Button>Table Topics</Button>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column>
        <StartStop />
      </Grid.Column>
    </Grid>
  </Segment>
);
