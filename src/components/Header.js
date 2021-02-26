import React, {useState, useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../AppContext"

function Header() {
  const {cartItems} = useContext(Context)


  const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

  return (
      <header>
          <Link to="/"><h2>Pic Some</h2></Link>
          <Link to="/cart">
              <i className={`${cartClassName} ri-fw ri-2x`}></i>
          </Link>
      </header>
  )
}

// SECOND WAY OF DOING IT!!!
// function headerCartIcon() {
//
//   if (cartItems.length > 0){
//     return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
//   } else
//     return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
// }

//     return (
//         <header>
//             <h2>Pic Some</h2>
//             {headerCartIcon}
//         </header>
//     )
// }

export default Header
