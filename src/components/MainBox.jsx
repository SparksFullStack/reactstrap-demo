import React from "react";

import { Container, Row, Col } from "reactstrap";

const styles = {
  outerDiv: {
    height: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue"
  }
};

export default ({ children }) => (
  <div style={styles.outerDiv}>
    <div>
      <h2>{children}</h2>
      <p>icon goes here</p>
      <h1>123</h1>
    </div>
  </div>
);
