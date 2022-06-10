import React from "react";
import { useFetch } from "./useFetch";

const url = "https://api.github.com/users";

const CustomHooks = () => {
  const { Loading } = useFetch(url);
  return (
    <>
      <h3>CustomHooks</h3>
      {Loading ? "Loading..." : " Data"}
    </>
  );
};

export default CustomHooks;
