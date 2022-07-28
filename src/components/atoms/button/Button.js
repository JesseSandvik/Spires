import PropTypes from "prop-types";

function Button({
  ariaLabel,
  children,
  className,
  disabled,
  id,
  onClick,
  title,
  type,
}) {
  return (
    <button
      aria-label={ariaLabel}
      className={className}
      disabled={disabled}
      id={id}
      onClick={onClick}
      title={title}
      type={type === "button" ? "button" : "submit"}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  ariaLabel: undefined,
  className: undefined,
  disabled: false,
  id: undefined,
  title: undefined,
  type: "submit",
};

export default Button;
