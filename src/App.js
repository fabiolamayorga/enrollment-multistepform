
import React from 'react';
import EnrollmentForm  from './EnrollmentForm/EnrollmentForm';
import {Grid, Container} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'


const App = () => {
  return (
    <Container text className="App">
      <Grid.Column>
        <EnrollmentForm />
      </Grid.Column>
    </Container>
  );
};

export default App;
