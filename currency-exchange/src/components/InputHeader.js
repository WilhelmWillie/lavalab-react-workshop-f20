import React from 'react';
import { useParams } from 'react-router-dom';

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

  // Get the currency from the URL (localhost:3000/:currency)
  const { currency } = useParams();

  return (
    <header className="inputHeader">
      <h1><span role="img" aria-label="Money bag">💰</span>Currency Exchange</h1>

      <div className="inputHeader-inputWrapper">
        <input type="text" onChange={handleInputChange} value={inputState} placeholder="100.0" />

        <label>
          {
            // Default to USD if currency isn't available (for some reason)
            currency.toUpperCase() || 'USD'
          }
        </label>

        <button onClick={handleConvertClick}>Convert</button>
      </div>
    </header>
  )
}

export default InputHeader;