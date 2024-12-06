// src/components/Button.tsx
"use client"; // Add this at the top to mark this component as a Client Component.

import React from "react";

export interface ButtonProps {
  label: string;
  onClick: () => void; // onClick function passed as a prop.
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      {label}
    </button>
  );
};

export default Button;
