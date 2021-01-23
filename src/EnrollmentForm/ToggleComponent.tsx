import React, { useState } from 'react';
import { Form, Container, Grid } from 'semantic-ui-react'
import { Field } from 'formik';

import { ToogleProps } from '../interfaces/interfaces';


const ToggleComponent: React.FC<ToogleProps> = ({ question, hiddenQuestion, hiddenQuestionName, name, values }) => {

    const [showHiddenQuestion, setShowHiddenQuestion] = useState(values[name] === 'yes');

    const handleChange = (e: any): void => {
        if (e.target.value === "yes") {
            setShowHiddenQuestion(true);
        } else {
            setShowHiddenQuestion(false);
        }
    }
    return (
        <Container>
            <Grid.Row><label>{question}</label></Grid.Row>
            <Grid.Row>
                <Form.Group onChange={(e: any) => handleChange(e)}>
                    <Form.Field>
                        <label>Yes</label>
                        <Field value="yes"
                            control='input'
                            type='radio'
                            name={name}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>No</label>
                        <Field value="no"
                            control='input'
                            type='radio'
                            name={name}
                        />
                    </Form.Field>
                </Form.Group>
            </Grid.Row>

            {showHiddenQuestion &&
                <Form.Group>
                    <Form.Field key="first-name">
                        <label>{hiddenQuestion}</label>
                        <Field name={hiddenQuestionName} id={hiddenQuestionName} />
                    </Form.Field>
                </Form.Group>
            }
        </Container>
    )
}

export default ToggleComponent;