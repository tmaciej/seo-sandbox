import './Navigation.css';
import React from 'react';
import Link from '../Link';

const Navigation = () => (
  <div className="Navigation">
    <Link href="/seo-sandbox/">Home</Link>
    <Link href="/seo-sandbox/subpage">Subpage</Link>
    <Link href="/seo-sandbox/foo">Non existent page</Link>
  </div>
);

export default Navigation;
