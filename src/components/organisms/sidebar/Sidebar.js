import PropTypes from "prop-types";

function Sidebar({ children }) {
  return <div id="sidebar">{children}</div>;
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
