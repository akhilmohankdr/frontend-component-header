import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({
  href,
  src,
  alt,
  ...attributes
}) => (
  <a href={href} className="logo" {...attributes} style={{ display: 'flex', alignItems: 'center' }}>
    <img className="d-block" src={src} alt={alt} />
    <span style={{
      marginLeft: '20px', 
      fontSize: '1.5rem', 
      fontWeight: '700', 
      color: 'white',
      whiteSpace: 'nowrap'
    }}>
      {alt}
    </span>
  </a>
);

export const logoDataShape = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Logo.propTypes = logoDataShape;

export default Logo;
