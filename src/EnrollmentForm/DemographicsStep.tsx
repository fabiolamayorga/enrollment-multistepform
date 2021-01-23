import React from 'react';
import { Form, Header, Container } from 'semantic-ui-react';
import { Field } from 'formik';


const DemographicStep: React.FC = () => {
    return (
        <Container>
            <Header as='h2'>Personal Information</Header>
            <Form.Field key="first-name">
                <label>First Name</label>
                <Field placeholder='First Name' name="firstName" id="firstName"/>
            </Form.Field>
            <Form.Field key="last-name">
                <label>Last Name</label>
                <Field placeholder='Last Name' name="lastName" id="lastName"/>
            </Form.Field>
            <Form.Field key="email">
                <label>Email</label>
                <Field placeholder='Email' name="email" id="email"/>
            </Form.Field>
            <Form.Field key="address">
                <label>Address</label>
                <Field placeholder='Address' name="address" id="address"/>
            </Form.Field>
            <Form.Field key="birthdate">
                <label>Birthdate</label>
                <Field placeholder='Birthdate' type="date" name="birthdate"  id="birthdate"/>
            </Form.Field>

        </Container>
    )
}

export default DemographicStep;