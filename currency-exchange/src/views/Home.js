import React from 'react';

import '../App.css';

import Link from '../components/Link';

function Home() {
  return (
    <main>
      <h1><span role="img" aria-label="Money bag">💰</span>Currency Exchange</h1>

      <nav>
        {/* 
          We are disabling ESLint for the next few lines cause otherwise 
          it would complain about our emoji use. In practice you should
          seldom ignore ESLint rules but for the sake of this workshop, we will
        */}
        {/* eslint-disable-next-line */}
        <Link to='/usd'>🇺🇸 Convert USD</Link>
        {/* eslint-disable-next-line */}
        <Link to='/jpy'>🇯🇵 Convert JPY</Link>
        {/* eslint-disable-next-line */}
        <Link to='/gbp'>🇬🇧 Convert GBP</Link>
        {/* eslint-disable-next-line */}
        <Link to='/inr'>🇮🇳 Convert INR</Link>
      </nav>
    </main>
  );
}

export default Home;
