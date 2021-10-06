import React from 'react';
import './header.css'
const Header = () => {
    return (
      <div class="mt-5">
        <div class="hero-image">
          <div class="hero-text">
            <h1 style={{fontSize:"4rem"}}>News Paper</h1>
            <p class="card-text fs-4">
A newspaper is a publication printed on paper and issued regularly, usually once a day or once a week.</p>
            <button class="button draw-border p-3 header-button">Reading</button>
          </div>
        </div>
      </div>
    );
};

export default Header;