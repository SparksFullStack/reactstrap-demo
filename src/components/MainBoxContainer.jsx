import React from "react";
import MainBox from "./MainBox";
import { Container, Row, Col } from "reactstrap";

export default () => (
  <Container>
    <Row>
      <Col xs={6}>
        <MainBox>Users</MainBox>
      </Col>
      <Col xs={6}>
        <MainBox>Computers</MainBox>
      </Col>
    </Row>
  </Container>
);
