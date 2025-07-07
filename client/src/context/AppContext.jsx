import { createContext, useContext, useEffect, useState } from "react";
export const AppContext = createContext();
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [user, setUser] = useState(true);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState([]);

  //fetch all products
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };

  // function to add to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
    toast.success("Item added to cart");
  };

  // function to update cart item

  const updateCartItem = (itemId, count) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart updated successfully");
  };

  // function to remove item from cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    setCartItems(cartData);
    toast.success("Item removed from cart");
  };

  const getCartCount = () => {
    let totalCouunt = 0;
    for (const items in cartItems) {
      totalCouunt += cartItems[items];
    }
    return totalCouunt;
  }

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      if(cartItems[items] > 0) {
        totalAmount += itemInfo.price * cartItems[items];
      }
    }
    return Math.floor(totalAmount * 100)/ 100;
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    setProducts,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    cartItems,
    searchQuery,
    setSearchQuery,
    getCartCount,
    getCartAmount,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
