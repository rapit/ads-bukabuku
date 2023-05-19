import React from "react";
import Navbar from "../Navbar/Navbar";
import Searchform from "../Searchform/Searchform";
import "./Header.css"

const Header = () => {
    return (
      <div className='holder'>
          <header className='header'>
              <Navbar />
              <div className='header-content'>
                  <h2 className='header-title text-capitalize'> Welcome to Buka Buku</h2><br />
                  <p className='header-text fs-15 fw-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                  <Searchform />
              </div>
          </header>
      </div>
    )
  }

export default Header