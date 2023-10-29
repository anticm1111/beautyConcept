import { styled } from "styled-components";
import { Audio } from "react-loader-spinner";
import React from "react";

const Spinner = styled.div`
  width: 100rem;
  margin: 0 auto;
  padding-top: 15rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  svg {
    fill: rgb(255, 192, 203);
  }
`;

const Loader = () => {
  <Audio
    height="80"
    width="80"
    radius="9"
    color="pink"
    ariaLabel="three-dots-loading"
    wrapperStyle
    wrapperClass
  />;
  return (
    <Spinner>
      <Audio />
    </Spinner>
  );
};

export default Loader;
