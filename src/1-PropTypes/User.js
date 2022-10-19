import React from 'react';
import PropType from 'prop-types';
import defaultImg from '../assets/logo192.png';

const User = ({ login, avatar_url, count = 40 }) => {
  return (
    <>
      <img src={avatar_url} />
      <h4>{login}</h4>
      <h3>Followers : {count}</h3>
      <p>
        <img src={defaultImg} style={{ width: '50px' }} />
      </p>
    </>
  );
};

//You can declare that a prop is a specific JS type. By default
User.propType = {
  login: PropType.string.isRequired,
  avatar_url: PropType.string.isRequired,
  count: PropType.number.isRequired,
};

User.defaultProps = {
  login: 'default name',
  avatar_url: defaultImg,
  count: 0,
};

export default User;
