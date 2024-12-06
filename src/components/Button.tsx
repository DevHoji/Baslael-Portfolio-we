// src/components/Button.tsx
"use client"; // Add this at the top to make this a Client Component

import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      {label}
    </button>
  );
};

export default Button;
