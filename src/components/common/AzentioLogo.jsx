import React from 'react';

/**
 * Clean, seamless Azentio Logo Component with zero background boxes.
 * Matches image copy.png:
 * - Bold geometric lowercase "azentio" in crisp white
 * - Exact twin-leaf archway emblem in Azentio green (#2EE59D)
 * - Clean ".ai" suffix
 */
export const AzentioLogo = ({ variant = 'dark', showAi = true, className = '' }) => {
  const isLight = variant === 'light';
  const textColor = isLight ? '#142332' : '#FFFFFF';

  return (
    <div className={`inline-flex items-center gap-1 select-none group cursor-pointer ${className}`}>
      {/* Lowercase wordmark "azentio" */}
      <span
        style={{ color: textColor }}
        className="font-extrabold text-[26px] tracking-[-0.035em] font-sans lowercase leading-none"
      >
        azentio
      </span>

      {/* Exact Twin-Leaf Archway Emblem from image copy.png */}
      <svg
        viewBox="0 0 26 30"
        className="w-[22px] h-[26px] shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Archway Leaf */}
        <path
          d="M11 25.5C7.2 24.8 3.5 19.8 3.5 12.5C3.5 6.2 6.8 2 11 1.5V25.5Z"
          fill="#2EE59D"
        />
        {/* Right Archway Leaf */}
        <path
          d="M15 25.5C18.8 24.8 22.5 19.8 22.5 12.5C22.5 6.2 19.2 2 15 1.5V25.5Z"
          fill="#2EE59D"
        />
      </svg>

      {/* Clean ".ai" Identifier */}
      {showAi && (
        <span className="font-extrabold text-[22px] text-[#2EE59D] tracking-tight ml-0.5">
          .ai
        </span>
      )}
    </div>
  );
};
