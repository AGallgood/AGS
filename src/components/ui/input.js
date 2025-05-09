import React from 'react';

export const Input = ({ value, onChange }) => {
  return <input type="number" value={value} onChange={onChange} className="input" />;
};
