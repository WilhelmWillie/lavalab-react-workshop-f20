import React from 'react';

import './styles/InputHeader.css';

function InputHeader(props) {
  /*
    The below is equivalent to:
    const handleInputChange = props.handleInputChange;
    const inputState = props.inputState;
    const handleConvertClick = props.handleConvertClick;
  */
  const {
    handleInputChange, inputState, handleConvertClick
  } = props;

  return (
    <header className="inputHeader">
      <h1><span role="img" aria-label="Money bag">💰</span>Currency Exchange</h1>

      <div className="inputHeader-inputWrapper">
        <input type="text" onChange={handleInputChange} value={inputState} placeholder="100.0" />

        <label>$USD</label>

        <button onClick={handleConvertClick}>Convert</button>
      </div>
    </header>
  )
}

export default InputHeader;