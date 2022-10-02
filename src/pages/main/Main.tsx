import { useLayoutEffect } from "react";

import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "modules/hooks";
import { reload } from "modules/slice/asyncTestSlice";

const Main = () => {
  const { userData } = useAppSelector((state) => state.aTest);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    console.log("main effect ", userData);
    dispatch(reload({ action: "getADList" }));
  }, []);

  return (
    <Container
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(userData);
        }}
      >
        Click!
      </button>
      Main
    </Container>
  );
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
