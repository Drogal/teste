// src/components/Button/Button.tsx
import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="my-button">
      {label}
    </button>
  );
};

export default Button;
