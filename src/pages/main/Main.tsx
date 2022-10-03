import { useLayoutEffect } from "react";

import { reload } from "modules/slice/adSlice";
import { useAppDispatch, useAppSelector } from "modules/hooks";

import styled, { css } from "styled-components";

const Main = () => {
  const { userData } = useAppSelector((state) => state.ads);

  const { adList, gameList } = userData;

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    console.log("main effect ", userData);
    dispatch(reload({}));
  }, []);

  return (
    <Container>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log("adList : ", adList);
          console.log("gameList : ", gameList);
        }}
      >
        Object Click!
      </button>
      Main
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(userData);
        }}
      >
        UserData Click!
      </button>
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
