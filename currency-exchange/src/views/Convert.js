import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import '../App.css';

import InputHeader from '../components/InputHeader';
import Error from '../components/Error';
import Results from '../components/Results';
import Link from '../components/Link';

function Convert() {
  // Get the currency from the URL (localhost:3000/:currency)
  const { currency } = useParams();

  // Keep track of rates. Will get updated when we make our API call
  const [rates, setRates] = useState(null);

  // Keep track of the amount inputted in our header textbox
  const [amountInput, setAmountInput] = useState(null);

  // Keep track of conversion results when our convert button is clicked
  const [results, setResults] = useState(null);

  // Keep track of whether or not an error occurred
  const [error, setError] = useState(false);

  // useEffect runs whenever anything in the dependency array gets changed
  // An empty array [] means the function will only run on mount
  // More here: https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    const getRates = async function() {
      const request = await fetch(`https://api.exchangeratesapi.io/latest?base=${currency.toUpperCase()}`);
      if (request.ok) {
        const data = await request.json();
        setRates(data.rates);
      }
    }

    getRates();
  }, [currency]);

  // Callback used by our text input box to update our amountInput state
  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setAmountInput(value);
  }, []);

  // Callback called when "Convert" button is clicked
  const calculateResults = useCallback((e) => {
    const amountInputAsFloat = parseFloat(amountInput);

    if (isNaN(amountInputAsFloat)) {
      // User did not input a valid number so we set error state to true
      setError(true);
    } else {
      // Otherwise, we calculate the conversions and update our results state
      setResults({
        USD: (rates['USD'] * amountInputAsFloat).toFixed(2),
        JPY: (rates['JPY'] * amountInputAsFloat).toFixed(2),
        GBP: (rates['GBP'] * amountInputAsFloat).toFixed(2),
        INR: (rates['INR'] * amountInputAsFloat).toFixed(2),
      });
      // Resets error
      setError(false);
    }
  }, [amountInput, rates]);

  return (
    <main>
      <InputHeader 
        handleInputChange={handleInputChange}
        inputState={amountInput}
        handleConvertClick={calculateResults}
      />
      
      {
        // Only display the Error component if the error state is true
        error && <Error message="An error occured! Did you input a real number?" />
      }

      {
        // Only display results if we... have results. Otherwise, show nothing
        results ? <Results results={results} /> : null
      }

      <Link to="/">Go back home</Link>
    </main>
  );
}

export default Convert;
