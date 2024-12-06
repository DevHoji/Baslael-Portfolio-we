// src/components/Button.tsx
"use client"; // This marks this component as a Client Component, allowing event handling

import React from "react";

// Define the props interface to type the button's label and click handler
interface ButtonProps {
  label: string;
  onClick: () => void;
}

// Define the Button component that takes `label` and `onClick` as props
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      {label}
    </button>
  );
};

export default Button;
