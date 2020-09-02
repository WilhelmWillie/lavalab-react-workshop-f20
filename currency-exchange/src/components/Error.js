import React from 'react';

import './styles/Error.css';

function Error(props) {
  /*
    The below is equivalent to:
    const message = props.message;
  */
  const {
    message
  } = props;

  return (
    <div className="error">
      <p>{message}</p>
    </div>
  )
}

export default Error;