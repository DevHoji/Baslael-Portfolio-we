// src/app/page.tsx (Client Component)
"use client"; // Add this to make this component a Client Component

import Button from "../components/Button";

export default function Page() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}
