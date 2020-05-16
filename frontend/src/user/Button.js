import React from "react";

export default function Button({ className, children, onClick, ...props }) {
  return (
    <div className={`btn ${className}`} onClick={onClick} {...props}>
      {children}
    </div>
  );
}
