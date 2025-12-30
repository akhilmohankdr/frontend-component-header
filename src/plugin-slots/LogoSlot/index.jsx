import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { getConfig } from '@edx/frontend-platform';
import Logo, { logoDataShape } from '../../Logo';

const LogoSlot = ({
  href, src, alt, ...attributes
}) => {
  const config = getConfig();
  const schoolCode = config.SCHOOL_CODE || '';
  
  // Construct school logo URL
  const schoolLogoUrl = schoolCode 
    ? `/static/schools/${schoolCode}/logo.jpg`
    : null;

  return (
    <PluginSlot
      id="org.openedx.frontend.layout.header_logo.v1"
      idAliases={['logo_slot']}
      slotOptions={{
        mergeProps: true,
      }}
    >
      <div className="logos-wrapper">
        {/* Platform Logo (Kokos) */}
        <Logo href={href} src={src} alt={alt} {...attributes} />
        
        {/* Divider */}
        {schoolLogoUrl && <span className="logo-divider">|</span>}
        
        {/* School Logo */}
        {schoolLogoUrl && (
          <img 
            src={schoolLogoUrl}
            alt={`${schoolCode} Logo`}
            className="school-logo"
            onError={(e) => {
              e.target.style.display = 'none';
              const divider = e.target.previousElementSibling;
              if (divider?.className === 'logo-divider') {
                divider.style.display = 'none';
              }
            }}
          />
        )}
      </div>
    </PluginSlot>
  );
};

LogoSlot.propTypes = logoDataShape;

export default LogoSlot;