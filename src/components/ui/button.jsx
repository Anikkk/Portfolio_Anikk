import React from 'react';

export function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md shadow-sm inline-flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
