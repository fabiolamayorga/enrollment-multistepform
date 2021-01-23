import React, { useState } from "react";

import { Button, Form } from "formik-semantic-ui";

import DemographicStep from "./DemographicsStep";
import ConditionStep from "./ConditionsStep";
import MedicalQuestionsStep from "./MedicalQuestionsStep";
import SummaryStep from "./SummaryStep";
import SubmitStep from "./SubmitStep";

import { Errors, IFormConditions } from "../interfaces/interfaces";

import * as Yup from "yup";
import { Divider, Grid } from "semantic-ui-react";

const EnrollmentForm = () => {
  const initialValues: IFormConditions = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    birthdate: "",
    conditions: [],
    personalConditions: [],
    smoke: "",
    alcohol: "",
    drugs: "",
    howOftenSmoke: "",
    howOftenAlcohol: "",
    howOftenDrugs: "",
    acceptedTerms: "",
  };

  const validationFormConditionsSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    address: Yup.string()
      .min(5, "Must be 5 characters or more")
      .required("Required"),
    conditions: Yup.array().min(1, "Must be select 1 or more"),
    personalConditions: Yup.array().min(1, "Must be select 1 or more"),
    birthdate: Yup.string().required("Required"),
    smoke: Yup.string().required("Required"),
    howOftenSmoke: Yup.string().when("smoke", {
      is: "yes",
      then: Yup.string().required("Must enter value"),
    }),
    alcohol: Yup.string().required("Required"),
    howOftenAlcohol: Yup.string().when("alcohol", {
      is: "yes",
      then: Yup.string().required("Must enter value"),
    }),
    drugs: Yup.string().required("Required"),
    howOftenDrugs: Yup.string().when("drugs", {
      is: "yes",
      then: Yup.string().required("Must enter value"),
    }),
  });

  const [step, setStep] = useState(0);

  const renderSwitch = (
    errors: Errors,
    values: IFormConditions,
  ) => {
    switch (step) {
      case 0:
        return <DemographicStep />;
      case 1:
        return <ConditionStep values={values} />;
      case 2:
        return <MedicalQuestionsStep values={values} />;
      case 3:
        return <SummaryStep values={values} errors={errors} />;
      case 4:
        return <SubmitStep />;
    }
  };

  const onClickNext = (e: any): void => {
    e.preventDefault();
    setStep(step + 1);
  };

  const onClickPreview = (e: any): void => {
    e.preventDefault();
    setStep(step - 1);
  };

  const onSubmitForm = (values: IFormConditions, formikApi: any): void => {
    console.log(values, formikApi);
    formikApi.setSubmitting(false)
  };

  const validateBack = (): boolean => {
    return step < 1;
  };

  const validateNext = (errors: Errors): boolean => {
    if (step === 3) {
      return Object.keys(errors).length !== 0;
    }

    return step === 4;
  };

  const validateTerms = (values: IFormConditions): boolean => {
    return values?.acceptedTerms[0] !== 'yes'
  };



  return (
    <Form
      initialValues={initialValues}
      validateOnMount
      validationSchema={validationFormConditionsSchema}
      onSubmit={onSubmitForm}
    >
      {({ errors, values }) => (
        <Form.Children>
          {renderSwitch(errors, values)}
          <Divider />
          <Grid.Row>
            <Button disabled={validateBack()} onClick={onClickPreview}>
              Preview
            </Button>

            {step !== 4 && (
              <Button onClick={onClickNext} disabled={validateNext(errors)}>
                Next
              </Button>
            )}
            {step === 4 && <Button.Submit disabled={validateTerms(values)}>Submit</Button.Submit>}
          </Grid.Row>
        </Form.Children>
      )}
    </Form>
  );
};

export default EnrollmentForm;
