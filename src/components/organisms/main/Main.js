import PropTypes from "prop-types";

function Main({ children, className, id }) {
  return (
    <main className={className} id={id}>
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};

Main.defaultProps = {
  children: undefined,
  className: undefined,
  id: undefined,
};

export default Main;
