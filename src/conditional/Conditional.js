import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";
const ConditionalRender = () => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState("Default user");
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setLoading(false);
          setError(true);
          throw new Error(res.statusText);
        }
      })
      .then((res) => {
        const { login } = res;
        setUser(login);
        setLoading(false);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  } else if (isError) {
    return (
      <>
        <h2> Error...</h2>
      </>
    );
  }
  return (
    <>
      <h1>Conditional Rendering</h1>
      <h3>{user}</h3>
      <ShortCircit />
    </>
  );
};

const ShortCircit = () => {
  const [text, setText] = useState("");
  const [isErrorrs, setErrorrs] = useState(true);

  // const checkError = () => {
  //   console.log(isError);
  // };

  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  return (
    <>
      <h3>{text || "ShortCircit here!"}</h3>

      <button type="button" onClick={() => setErrorrs(!isErrorrs)}>
        toggle
      </button>
      {isErrorrs && <h1>Heloo React</h1>}
      {isErrorrs ? <p>there is error</p> : <h4>there is no error!</h4>}
    </>
  );
};

export default ConditionalRender;
