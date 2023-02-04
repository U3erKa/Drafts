import React, { MouseEventHandler } from 'react';
import PropTypes from 'prop-types';

const HeaderUserCard = (props: {
  user: { name: string; src: string };
  logout: MouseEventHandler<HTMLButtonElement>;
}) => {
  // const { user, logout, ...rest } = props;
  const { user, logout } = props;

  return (
    <div>
      {user && <img alt={user.name} src={user.src} />}

      <button
        style={{ padding: '20px', backgroundColor: 'lightblue' }}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

HeaderUserCard.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default HeaderUserCard;
