import React from "react";
import PropTypes from 'prop-types'

import "./Button.styles.css";

const Button = ({ text, color,onClick }) => {
  return (
    <div>
      <button 
      className='button' 
      style={{ backgroundColor: color }}
      onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "black",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
