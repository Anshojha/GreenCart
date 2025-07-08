import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext.jsx'
import Login from './components/Login'
import AllProduct from './pages/AllProduct.jsx'
import ProductCategories from './pages/ProductCategories.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'
import AddAdderss from './pages/AddAdderss.jsx'



const App = () => { 
  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin} = useAppContext();
  return (
    <div>
     { isSellerPath ? null : <NavBar/>}
     {showUserLogin ? <Login/> : null}
     <Toaster/>
        <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32" }`}>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/products' element = {<AllProduct/>}/>
            <Route path='/products/:category' element = {<ProductCategories/>}/>
            <Route path='/products/:category/:id' element = {<ProductDetails/>}/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/add-address' element = {<AddAdderss/>}/>
          </Routes>
        </div>
       {!isSellerPath && <Footer/>}
    </div>
  )
}

export default App
