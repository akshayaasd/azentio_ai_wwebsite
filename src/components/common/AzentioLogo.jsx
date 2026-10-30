import React from 'react';

/**
 * Authentic Azentio Logo Component matching image copy.png:
 * - Lowercase "azentio" in crisp white for dark themes
 * - Exact twin-leaf archway emblem in Azentio mint-emerald (#54BD85)
 * - Seamless transparent background, zero boxes, no .ai suffix
 */
export const AzentioLogo = ({ variant = 'dark', className = '', height = 'h-8' }) => {
  return (
    <div className={`inline-flex items-center select-none group cursor-pointer ${className}`}>
      <img
        src="/azentio-logo-dark.png"
        alt="Azentio"
        className={`${height} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
        loading="eager"
      />
    </div>
  );
};

