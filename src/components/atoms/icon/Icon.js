import PropTypes from "prop-types";

function Icon({ ariaLabel, className, id, title }) {
  return (
    <i aria-label={ariaLabel} className={className} id={id} title={title} />
  );
}

Icon.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string.isRequired,
  id: PropTypes.string,
  title: PropTypes.string,
};

Icon.defaultProps = {
  ariaLabel: undefined,
  id: undefined,
  title: undefined,
};

export default Icon;
