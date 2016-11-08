import './Navigation.css';
import React from 'react';
import Link from '../Link';

const Navigation = () => (
  <div className="Navigation">
    <Link href="/">Home</Link>
    <Link href="/subpage">Subpage</Link>
    <Link href="/foo">Non existent page</Link>
  </div>
);

export default Navigation;
