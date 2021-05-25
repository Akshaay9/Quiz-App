import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
function Spinner() {
  const override = css`
    display: block;
    margin: 1rem auto;
    border-color: red;
  `;
  return (
    <>
      <HashLoader color={"#141a33"} size={130}  css={override} />
    </>
  );
}

export default Spinner;
