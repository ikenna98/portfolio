import './styles.css';

import React from 'react'

function Button() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        Learn more
      </a>
      <a href="#contact" className="btn sec">
        Get in Touch
      </a>
    </div>
  )
}

export default Button
