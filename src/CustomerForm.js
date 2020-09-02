import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

const CustomerForm = (props) => {
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="clientName">Name</Label>
            <Input type="text" name="name" id="clientName" placeholder="Firstname Lastname" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="El Paso" placeholder="El Paso" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="state" placeholder="TX" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="zip" placeholder="90210" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <FormGroup>
            <Label for="genderCheckbox">Gender</Label>
            <div>
              <CustomInput type="radio" id="maleRadio" name="genderRadio" label="Male" />
              <CustomInput type="radio" id="femaleRadio" name="genderRadio" label="Female" />
            </div>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="ethnicityCheckbox">Ethnicity</Label>
            <div>
              <CustomInput type="radio" id="hispanicRadio" name="hispanicRadio" label="Hispanic" />
              <CustomInput type="radio" id="nonHispanicRadio" name="hispanicRadio" label="Non-Hispanic" />
            </div>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label for="exampleCustomSelect">Custom Select</Label>
            <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
              <option value="">Select Income</option>
              <option>$0 - $12,000</option>
              <option>$12,000 - $20,000</option>
              <option>$20,000 - $23,000</option>
              <option>$23,000 - $25,000</option>
            </CustomInput>
          </FormGroup>
        </Col>
      </Row>
      <Button outline color="primary">Submit</Button>
    </Form>
  );
}

export default CustomerForm;