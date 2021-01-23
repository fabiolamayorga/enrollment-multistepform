import React, { useState, useEffect } from 'react';
import { Form, Header, Grid, Container } from 'semantic-ui-react'
import { Field } from 'formik';

import data from '../data/data.json';
import { IConditions, ConditionProps } from '../interfaces/interfaces';


const ConditionsStep: React.FC<ConditionProps> = ({ values }) => {
    const selectedTypeConditions: string[] = values.conditions;
    const initialArray: IConditions[] = [];
    const [filters, setFilters] = useState(initialArray);
    const conditions: IConditions[] = data;

    const uniqueObjects: string[] = [...new Set(conditions.map(x => x.type))];

    useEffect(() => {
        let filteredArray: IConditions[] = [];

        if (selectedTypeConditions) {
            filteredArray = conditions.filter(
                (item) =>
                    selectedTypeConditions.includes(item.type)
            );
            setFilters(filteredArray);
        };
    }, [selectedTypeConditions, conditions]);


    return (
        <Container>
            <Header as='h2'>Conditions</Header>
            <p>Please select your medical conditions:</p>
            <Grid.Row>
                <Form.Group key="conditions">
                    {
                        uniqueObjects.map((type, index) => {
                            return (
                                <Form.Field key={`checkbox-${index}`} inline>
                                    <Field type="checkbox" name="conditions" value={type} />
                                    <label>{type}</label>
                                </Form.Field>

                            )
                        })

                    }
                </Form.Group>
            </Grid.Row>
            <Grid.Row>
                <Form.Group key="conditions" >
                    {
                        <div>
                            {filters.map((item, index) => {
                                return (
                                    <Form.Field key={`subCheckbox-${index}`} inline>
                                        <Field type="checkbox" name="personalConditions" value={item.condition} />
                                        <label>{item.condition}</label>
                                    </Form.Field>
                                )
                            })}
                        </div>
                    }

                </Form.Group>
            </Grid.Row>

        </Container >
    )
}

export default ConditionsStep;