// src/components/Flags.tsx
import React from 'react';

export const RussianFlag: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="8" fill="#FFFFFF" />
    <rect y="8" width="36" height="8" fill="#0052B4" />
    <rect y="16" width="36" height="8" fill="#D80027" />
  </svg>
);

export const USFlag: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="24" fill="#FFFFFF" />
    <rect width="36" height="1.85" fill="#B22234" />
    <rect y="3.69" width="36" height="1.85" fill="#B22234" />
    <rect y="7.38" width="36" height="1.85" fill="#B22234" />
    <rect y="11.07" width="36" height="1.85" fill="#B22234" />
    <rect y="14.76" width="36" height="1.85" fill="#B22234" />
    <rect y="18.45" width="36" height="1.85" fill="#B22234" />
    <rect y="22.14" width="36" height="1.85" fill="#B22234" />
    <rect width="14.4" height="12" fill="#3C3B6E" />
    <g fill="#FFFFFF">
      <circle cx="1.8" cy="1.2" r="0.3" /><circle cx="3.6" cy="1.2" r="0.3" /><circle cx="5.4" cy="1.2" r="0.3" />
      <circle cx="7.2" cy="1.2" r="0.3" /><circle cx="9" cy="1.2" r="0.3" /><circle cx="10.8" cy="1.2" r="0.3" />
      <circle cx="12.6" cy="1.2" r="0.3" /><circle cx="2.7" cy="3.6" r="0.3" /><circle cx="4.5" cy="3.6" r="0.3" />
      <circle cx="6.3" cy="3.6" r="0.3" /><circle cx="8.1" cy="3.6" r="0.3" /><circle cx="9.9" cy="3.6" r="0.3" />
      <circle cx="11.7" cy="3.6" r="0.3" /><circle cx="1.8" cy="6" r="0.3" /><circle cx="3.6" cy="6" r="0.3" />
      <circle cx="5.4" cy="6" r="0.3" /><circle cx="7.2" cy="6" r="0.3" /><circle cx="9" cy="6" r="0.3" />
      <circle cx="10.8" cy="6" r="0.3" /><circle cx="12.6" cy="6" r="0.3" /><circle cx="2.7" cy="8.4" r="0.3" />
      <circle cx="4.5" cy="8.4" r="0.3" /><circle cx="6.3" cy="8.4" r="0.3" /><circle cx="8.1" cy="8.4" r="0.3" />
      <circle cx="9.9" cy="8.4" r="0.3" /><circle cx="11.7" cy="8.4" r="0.3" /><circle cx="1.8" cy="10.8" r="0.3" />
      <circle cx="3.6" cy="10.8" r="0.3" /><circle cx="5.4" cy="10.8" r="0.3" /><circle cx="7.2" cy="10.8" r="0.3" />
      <circle cx="9" cy="10.8" r="0.3" /><circle cx="10.8" cy="10.8" r="0.3" /><circle cx="12.6" cy="10.8" r="0.3" />
    </g>
  </svg>
);