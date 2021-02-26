import React, {useState, useEffect} from "react"
const Context = React.createContext()

const PHOTOS_API_URL = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

function ContextProvider({children}) {
  const [gallery, setGallery] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetch(PHOTOS_API_URL)
        .then(response => response.json())
        .then(data => {
          setGallery(data)
        })
        .catch(error => {
            console.log(error);
        })
  }, [])
  //if you dont use here empty condition it will loop until everything is loaded, pulling
  //the same array multiple times. With empty condition you practically load once.

    function toggleFavorite(id) {
      const updatedArr = gallery.map(photo => {
          if(photo.id === id) {
              console.log(id)
              console.log(!photo.isFavorite)
              return {...photo, isFavorite: !photo.isFavorite}
          }
          return photo
      })
      setGallery(updatedArr)

  }

  function addToCart(newItem){
    setCartItems(prevItems => [...prevItems, newItem])
  }

  function removeFromCart(id){
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  function emptyCart(){
    setCartItems([])
  }

  console.log(gallery)
  //anything we want to pass to out components through context it will happen through the value of context
  return (
    <Context.Provider value={{gallery, toggleFavorite, addToCart, removeFromCart, cartItems}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}
