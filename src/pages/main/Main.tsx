import styled, { css } from "styled-components";

const Main = () => {
  console.log("Main");
  return <Container>Main</Container>;
};

export default Main;

const Container = styled.div<{ primary?: boolean }>`
  background-color: hotpink;

  ${(props) =>
    props.primary &&
    css`
      background-color: red;
    `}
`;
