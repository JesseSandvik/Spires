import PropTypes from "prop-types";

function Sidebar({ children, className }) {
  return (
    <section className={className} id="sidebar">
      {children}
    </section>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Sidebar.defaultProps = {
  className: undefined,
};

export default Sidebar;
