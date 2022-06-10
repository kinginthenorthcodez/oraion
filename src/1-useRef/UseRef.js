import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const refInput = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(refInput.current.value);
    console.log(divContainer.current);
    refInput.current.value = "";
  };

  useEffect(() => {
    console.log(refInput.current);
    refInput.current.focus();
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={refInput} />
        <button type="submit">submit</button>
      </form>
      <div ref={divContainer}>
        <h2>useRef hook</h2>
        <p> input value : {refInput.current} </p>
      </div>
    </>
  );
};

export default UseRef;
