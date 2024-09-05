import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id == product.id);

      if (existingProduct) {
        toast.error("This item is already added in cart");
        return prevItems.map((item) =>
          item.id == product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success("Item added to cart successfully");
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const addToFavorite = (prod) => {
    setFavItems((prevItems) => {
      const itemExist = prevItems.find((item) => item.id == prod.id);
      if (itemExist) {
        toast.error("This item is already in your favorites");
        return prevItems;
      } else {
        toast.success("Item added to favorites successfully");
        return [...prevItems, prod];
      }
    });
  };

  const removeFromCart = (productId) => {
    // setCartItems(cartItems.filter(item => item.id != itemId));
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id != productId)
    );
  };

  const updateQuantity = (itemId, action) => {
    console.log('updateQuantity called with:', itemId, action);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity:
                action === "increment"
                  ? item.quantity + 1
                  : action === "decrement" && item.quantity > 1
                  ? item.quantity - 1
                  : item.quantity,
            }
          : item
      )
    );
  };
  

  //   const totalPrice = ()

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToFavorite,
        favItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
