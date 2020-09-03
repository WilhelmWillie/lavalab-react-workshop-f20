import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import './styles/Link.css';

function Link(props) {
  // This is the same as:
  // const to = props.to;
  // const children = props.children;
  const { to, children } = props;

  return (
    <RouterLink to={to} className="link">
      {children}
    </RouterLink>
  )
}

export default Link;