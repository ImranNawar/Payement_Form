import React from 'react';

const Button = ({ text, primary, secondary, success, warning, danger, outline, rounded }) => {
  return (
    <div>
      <button>{ text }</button>
    </div>
  )
}

export default Button;