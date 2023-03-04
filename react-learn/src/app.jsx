import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import StackTodo from './components/StackTodo/index';
const App = () => {
  return (
    <Container className='my-3'>
      <Row>
        <Col>
        <h1>Project Stack Todo</h1>
        <StackTodo />
        </Col>
      </Row>
    </Container>

  )
}



export default App;
