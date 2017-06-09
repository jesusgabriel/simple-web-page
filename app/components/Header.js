import React from 'react';

function Header(props) {
  return (
    <div className='header'>
      {/* <p>I am a {props.title}!!</p> */}
      <h1>Project Final</h1>
      <h2>Andy Melo</h2>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
