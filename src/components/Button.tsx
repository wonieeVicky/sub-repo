﻿import React from 'react';

const Button = ({ text, onClick, ...props }: any) => {
  return (
    <button
      style={{
        border: '1px solid red',
        padding: '15px 20px',
        borderRadius: 8,
        ...props.style
      }}
      onClick={onClick}
    >
      {text}sub-repo
    </button>
  );
};

export default Button;
