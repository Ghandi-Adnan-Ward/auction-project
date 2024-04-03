import React from 'react'
import Form from 'react-bootstrap/Form';
import { Col, Container,Row,Button, InputGroup } from 'reactstrap';
import './Login.css'
function Login() {
  return (
   <div>
     <Form>
      <Row className="align-items-center">
        <Col sm={3} className="my-1">
          <Form.Label htmlFor="inlineFormInputName"  >
            Name
          </Form.Label>
          <Form.Control type='text' id="inlineFormInputName" placeholder="Jane Doe" />
        </Col>
        <Col sm={3} className="my-1">
          <Form.Label htmlFor="inlineFormInputGroupUsername"  >
            Username
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
            type='text'
              id="inlineFormInputGroupUsername"
              placeholder="Username"
            />
          </InputGroup>
        </Col>
        <Col  className="my-1">
          <Form.Check
            type="checkbox"
            id="autoSizingCheck2"
            label="Remember me"
          />
        </Col>
        <Col  className="my-1">
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
   </div>
  )
}

export default Login
