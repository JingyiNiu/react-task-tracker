import React from "react";
import PropTypes from 'prop-types'

import "./Button.styles.css";

const Button = ({ text, color }) => {
  return (
    <div>
      <button className='button' style={{ backgroundColor: color }}>
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
};

export default Button;
