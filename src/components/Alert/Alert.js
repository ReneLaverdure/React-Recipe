import React from 'react';
import classes from './Alert.module.css';

const Alert = ({text, type}) => {

  const divStyle = {
    color: type,
  }

  return(
    <div style={divStyle} className={classes.alert}>
        {text}
    </div>
  )
}

export default Alert;