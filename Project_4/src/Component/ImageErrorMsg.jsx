import React from "react";

const ImageErrorMsg = ({ errorMsg }) => {
  return (
    <>
      {errorMsg ? (
        <h1 style={{ color: "#f00" }}>{errorMsg}</h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default ImageErrorMsg;
