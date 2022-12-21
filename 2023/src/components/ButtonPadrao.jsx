import React from 'react';
import './ButtonPadrao.css';

const ButtonPadrao = ({ id, text, action }) => {
  const handleAction = (e) => {
    e.preventDefault();
    action(e);
  }
  return (
    <button id={id} onClick={handleAction}>{text}</button>
  )
}

export default ButtonPadrao