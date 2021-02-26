import React, {useState, useContext} from "react"
import PropTypes from 'prop-types'
import {Context} from "../AppContext"
import useHover from "../hooks/useHover"


function Image({className, img}) {
  // const [hover, trackHover] = useState(false)
  const [hovered, ref] = useHover()
  const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

  function cartIcon(id) {
    let isInCart = cartItems.some(photo => photo.id === img.id)

    if (isInCart){
      <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
    } else if (hovered)
      <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
  }

  // const filledHeartIcon = img.isFavorite && <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
  // const heartIcon = hover && !img.isFavorite && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
  // //The onClick cannot receive the function because it will be listening for the event. We call an anonymous function instead.
  //
  // 2nd way of implementing the heart icon
 
  function heartIcon() {
    if(img.isFavorite) {
        return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    } else if(hovered) {
        return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    }
}

  return (
      <div className={`${className} image-container`}>
        <img alt="" src={img.url} className="image-grid"
        // onMouseEnter={() => trackHover(true)}
        // onMouseLeave={() => trackHover(false)}
        ref={ref}
        />
        {heartIcon()}
        {cartIcon()}
      </div>
  )
}



Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}

export default Image
