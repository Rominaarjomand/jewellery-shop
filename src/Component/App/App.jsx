import { Provider, useSelector } from "react-redux";
import Menu from "../Menu/Menu";
import Store from "../../Redux/Store";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Contact from "../Contact/Contact";
import Productitem from "../Products/Productitem";
import Footer from "../Footer/Footer"
import User from "../User/User"
import Show from "../User/Show"
import Edit from "../User/edit"
import Createuser from "../User/Createuser"
import ShopingCard from "../ShopingCard/ShopingCard";
import React from "react";
import Allproducts from "../Allproducts/Allproducts"
import Allproductsitem from "../Allproducts/Allproductsitem";
import Allshopproducts from "../Allproducts/Allshopproducts";
import Comment from "../Comment/Comment";
import Createcomment from "../Comment/Createcomment"
import Aboutus from "../Aboutus/Aboutus";
import Allcomment from "../Comment/AllComment";
const App = () => {
 


    return (
        <>
        <Provider store={Store}>
        <BrowserRouter>
        <Menu/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path="/User/:id" element={<Show/>}/>
        <Route path="/User/edit/:id" element={<Edit/>}/>
        <Route path="/CreateUser" element={<Createuser/>}/>
        <Route path="/ShopingCard" element={<ShopingCard/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Products/:id" element={<Productitem/>}/>
        <Route path="/Collections/:id" element={<Allshopproducts/>}/>
        <Route path="/Allproducts" element={<Allproducts/>}/>
        <Route path="/Allproducts/:id" element={<Allproductsitem/>}/>
        <Route path="/Allshopproducts/:id" element={<Allproductsitem/>}/>
        <Route path="/Allshopproducts" element={<Allshopproducts/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Comment" element={<Comment/>}/>
        <Route path="/Allcomment" element={<Allcomment/>}/>
        <Route path="/Comment/Createcomment" element={<Createcomment/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
       </Provider>
    </>
     );
}
 
export default App;