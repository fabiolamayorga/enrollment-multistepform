import React from 'react';
import { Header, Container, } from 'semantic-ui-react'
import { ConditionProps } from '../interfaces/interfaces';
import ToggleComponent from './ToggleComponent';

const MedicalQuestionsStep: React.FC<ConditionProps> = ({values}) => {
    return (
        <Container>
            <Header as='h2'>Personal Information</Header>

            <ToggleComponent
                question={"Do you smoke any tobacco products?"}
                hiddenQuestion={"How much and how often?"}
                hiddenQuestionName={"howOftenSmoke"}
                name="smoke"
                values={values}
            />

            <ToggleComponent
                question={"Do you drink alcohol?"}
                hiddenQuestion={"How much and how often?"}
                hiddenQuestionName={"howOftenAlcohol"}
                name="alcohol"
                values={values}

            />

            <ToggleComponent
                question={"Have you regularly used illicit drugs?"}
                hiddenQuestion={"How much and how often?"}
                hiddenQuestionName={"howOftenDrugs"}
                name="drugs"
                values={values}

            />
        </Container>
    )
}

export default MedicalQuestionsStep;