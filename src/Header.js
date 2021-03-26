import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

 

  return (
    <div className="header">
      <Link to="/">
        <div>
        <img
          className="header__logo"
          src="assets/images/logo.png"
          
        /></div>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        
      </div>

      <div className="header__nav">
        
        
        <Link to="/checkout">
          <div className="header__optionBasket">
          CheckOut
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
