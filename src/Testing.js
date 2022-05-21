import React from "react";
import styled from "styled-components";

const Testing = () => {
  return (
    <Wrapper>
      <h3>Hello world</h3>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3 {
    color: red;
  }
`;

export default Testing;
