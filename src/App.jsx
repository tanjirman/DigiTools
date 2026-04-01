import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import GetStarted from './Components/GetStarted/GetStarted'
import NavBar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing'
import Products from './Components/Products/Products'
import { ToastContainer } from 'react-toastify'
import Workflow from './Components/Workflow/Workflow'

function App() {
  
 const [cart, setCart] = useState([]);
 const [activeTab, setActiveTab] = useState("model");

 const handleCartClick = () => {
    setActiveTab("cart");
    
  };
  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} />
      <NavBar cart={cart} onCartClick={handleCartClick} />

      <Banner/>

      <Products cart={cart} setCart={setCart}  activeTab={activeTab}
        setActiveTab={setActiveTab}/>

      <GetStarted/>

      <Pricing/>

      <Workflow/>

      <Footer/>
    </>
  )
}

export default App
