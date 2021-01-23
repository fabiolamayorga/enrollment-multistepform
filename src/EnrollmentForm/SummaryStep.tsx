import React from "react";
import { Container, Header, Table } from "semantic-ui-react";
import { ConditionProps } from "../interfaces/interfaces";

const SummaryStep: React.FC<ConditionProps> = ({ values, errors }) => {
  return (
    <Container>
      <Header>Questionary Summary</Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Field</Table.HeaderCell>
            <Table.HeaderCell>Response</Table.HeaderCell>
            <Table.HeaderCell>Error</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>First Name</Table.Cell>
            <Table.Cell>{values.firstName}</Table.Cell>
            <Table.Cell>{errors?.firstName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Last Name</Table.Cell>
            <Table.Cell>{values.lastName}</Table.Cell>
            <Table.Cell>{errors?.lastName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Address</Table.Cell>
            <Table.Cell>{values.address}</Table.Cell>
            <Table.Cell>{errors?.address}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Birthdate</Table.Cell>
            <Table.Cell>{values.birthdate}</Table.Cell>
            <Table.Cell>{errors?.birthdate}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Medical conditions</Table.Cell>
            <Table.Cell>{values.conditions}</Table.Cell>
            <Table.Cell>{errors?.conditions}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Personal conditions</Table.Cell>
            <Table.Cell>{values.personalConditions}</Table.Cell>
            <Table.Cell>{errors?.personalConditions}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Do you smoke any tobacco products?</Table.Cell>
            <Table.Cell>{values.smoke}</Table.Cell>
            <Table.Cell>{errors?.smoke}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Do you drink alcohol?</Table.Cell>
            <Table.Cell>{values.alcohol}</Table.Cell>
            <Table.Cell>{errors?.alcohol}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Have you regularly used illicit drugs?</Table.Cell>
            <Table.Cell>{values.drugs}</Table.Cell>
            <Table.Cell>{errors?.drugs}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  );
};

export default SummaryStep;
