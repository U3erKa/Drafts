import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {{name: string, id?: number}} props
 */
function Greeting(props) {
  const { name } = props;
  return (
    <p>Hello, {name}!</p>
  );
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
