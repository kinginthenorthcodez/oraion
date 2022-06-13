import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <h2>Nav page</h2>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/people">BirthDays</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
