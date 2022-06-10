import React from "react";
import User from "./User";
import { useFetch } from "../1-customHooks/useFetch";

const url = "https://api.github.com/users";

const PropsType = () => {
  const { Users } = useFetch(url);
  console.log(...Users);
  return (
    <>
      <h3>Github Users</h3>
      {Users.map((user) => {
        return (
          <div key={user.id}>
            <User key={user.id} {...user} />
          </div>
        );
      })}
    </>
  );
};

export default PropsType;
