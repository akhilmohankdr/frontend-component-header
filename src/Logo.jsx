import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({
  href,
  src,
  alt,
  ...attributes
}) => {
  console.log('Logo image path:', src);
  return (
    <a href={href} className="logo" {...attributes}>
      <img className="d-block logo-image" src={src} alt={alt} />
      {alt && (
        <span className="site-name">
          {alt}
        </span>
      )}
    </a>
  );
};
export const logoDataShape = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Logo.propTypes = logoDataShape;

export default Logo;