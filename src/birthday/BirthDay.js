import React, { useState } from "react";
import data from "./Data";
import List from "./List";

const BirthDay = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <h3>{people.length} Birthdays Today</h3>
      <List people={people} />
      <button type="button" onClick={() => setPeople([])}>
        Clear ALL
      </button>
    </>
  );
};

export default BirthDay;
