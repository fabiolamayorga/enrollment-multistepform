import React from 'react';
import { Card, Container, Divider, Header, Form } from 'semantic-ui-react'
import { ConditionProps } from '../interfaces/interfaces';
import { Field } from 'formik';

const SubmitStep: React.FC = () => {
    return (
        <Container>
            <Header>Submit Step</Header>
            <Divider />
            <Card fluid>
                <Card.Content>
                    <Card.Header content="Terms" />
                    <Card.Description content='Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.' />
                    <Card.Description content='Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.' />

                </Card.Content>
            </Card>
            <Form.Field inline>
                <Field type="checkbox" name="acceptedTerms" value="yes" />
                <label>Agree Terms and Conditions</label>
            </Form.Field>
        </Container>
    )
}

export default SubmitStep;
