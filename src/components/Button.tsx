﻿import React from 'react';

const Button = ({ text, onClick, ...props }: any) => {
  return (
    <button
      style={{
        border: '1px solid orange',
        padding: '15px 20px',
        borderRadius: 8,
        ...props.style
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
