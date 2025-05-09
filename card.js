import React from 'react';

export const Card = ({ children }) => {
  return (
    <div className="border rounded-md shadow-md p-4">
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div>{children}</div>;
};
