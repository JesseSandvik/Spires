import PropTypes from "prop-types";

function ExternalLink({ children, className, href, id, title }) {
  return (
    <a
      className={className}
      href={href}
      id={id}
      rel="noopener noreferrer"
      target="_blank"
      title={title}
    >
      {children}
    </a>
  );
}

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};

ExternalLink.defaultProps = {
  className: undefined,
  href: undefined,
  id: undefined,
  title: undefined,
};

export default ExternalLink;
