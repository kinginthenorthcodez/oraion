import { useState } from "react";

const ErrorExample = () => {
  const [value, setValue] = useState(0);

  const moreComplexIn = () => {
    setTimeout(() => {
      setValue((prevState) => prevState + 1);
    }, 2000);
  };
  return (
    <>
      <h2>Regular Counter</h2>
      <p>{value}</p>
      <button type="button" onClick={() => setValue(value + 1)}>
        Increament
      </button>
      <button type="button" onClick={() => setValue(0)}>
        Reset
      </button>
      <button type="button" onClick={() => setValue(value - 1)}>
        Decreament
      </button>
      <button type="button" onClick={moreComplexIn}>
        MoreCompelxIncreament
      </button>
    </>
  );
};

export default ErrorExample;
