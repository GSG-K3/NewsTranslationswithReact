import React from 'react';
import '../App.css';
import GetNews from './GetNews';

function NavBar() {
  return (
    <div>
      <nav className="menu">
        <ul>
          <li>
            <a href="/worldnews">World News </a>
          </li>
          <li>
            <a href="/">Top News</a>
          </li>
        </ul>
      </nav>
      <GetNews />
      <footer>created with love @2020</footer>
    </div>
  );
}

export default NavBar;
