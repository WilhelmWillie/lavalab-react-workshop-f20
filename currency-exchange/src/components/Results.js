import React from 'react';

import './styles/Results.css';

function ResultsCell(props) {
  /*
    The below is equivalent to:
    const label = props.label;
    const amount = props.amount;
  */
 const {
    label,
    amount
  } = props;

  return (
    <div className="results-cell">
      <h3>{label}</h3>
      <span className="results-cell-amount">{amount}</span>
    </div>
  )
}

function Results(props) {
  /*
    The below is equivalent to:
    const results = props.results;
  */
  const {
    results
  } = props;

  return (
    <div className="results">
      <ResultsCell
        label="🇺🇸 USD"
        amount={results['USD']}
      />

      <ResultsCell
        label="🇯🇵 JPY"
        amount={results['JPY']}
      />

      <ResultsCell
        label="🇬🇧 GBP"
        amount={results['GBP']}
      />

      <ResultsCell
        label="🇮🇳 INR"
        amount={results['INR']}
      />
    </div>
  )
}

export default Results;