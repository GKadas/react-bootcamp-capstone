import React, {useState, useContext} from "react"
import {Context} from "../AppContext"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const {orderText, setOrderText} = useState("Place Order")
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    // function calculateTotalCost () {
    //   // let total = 0
    //   // cartItems.map(item => (
    //   //   total = total + item.price
    //   // ))
    //
    //   let numOfItems = cartItems.length
    //   let total = numOfItems * 5.99
    //
    //   return total
    // }

    function placeOrder(){
      setOrderText("Ordering...")
      setTimeout(function(){
       	console.log("Order Placed")
        setOrderText("Place Order")
        emptyCart()
      }, 3000)

      // cartItems.map(item => (
      //     removeFromCart(item.id)
      // ))
    }

    function orderIcon(){
      cartItems.length &&
        <div className="order-button">
            <button onClick={placeOrder}>{orderText}</button>
        </div>

        // cartItems.length > 0 ?
        // <div className="order-button">
        //     <button onClick={placeOrder}>{buttonText}</button>
        // </div> :
        // <p>You have no items in your cart.</p>
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            {orderIcon}
        </main>
    )
}

export default Cart
