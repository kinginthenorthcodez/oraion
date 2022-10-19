import React from 'react';

const Friends = () => {
  return (
    <>
      <h1>Props in React</h1>
      <BestFriend name={'Jerry'} /* prop argument passed as attribute */ />
    </>
  );
};

// argument or attribute received as props value
const BestFriend = (props) => {
  return (
    <>
      <h2>My best friend BirthDay</h2>
      <p>
        Hello {props.name} thanks for being my best friend!! Happy BirthDay
        buddy!
      </p>
    </>
  );
};

export default Friends;
