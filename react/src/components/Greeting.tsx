import PropTypes from 'prop-types';

function Greeting(props: { name: string; id?: number }) {
  const { name } = props;
  return <p>Hello, {name}!</p>;
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
