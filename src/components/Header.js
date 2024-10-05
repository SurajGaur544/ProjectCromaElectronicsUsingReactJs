import React, { useState } from "react";
import logo from "../assist/logo.svg"
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { ImLocation } from "react-icons/im";
import { IoPencil } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import Box from "./Box";
import Dropdown from "../page/Dropdown";
import Location from "./Location";
import '../App.css';
import LoginPage from "./LoginPage";
import { useNavigate, Link } from "react-router-dom";
// import { context } from "../page/Dealsoftheday";
import {  Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Productaboutpage from "./Productaboutpage";
import SignUp from "./SignUp";
import SearchPage from "./SearchPage";



const Header = () => {
    const [flag, setFlag] = useState(false);
    const [input, setInput] = useState('');
    // const [result, setResults] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [location, setLocation] = useState(false);
    const [locationData, setLocationData] = useState({
        pincode: "400009",
        state: "Mumbai"
    });

    const navigate = useNavigate()
    const handleLocation = () => {
        !location ? setLocation(true) : setLocation(false)
        
    }

    const menu = () => {
        !flag ? setFlag(true) : setFlag(false)
    }

    const handleUser = () => {
        !isLogin ? setIsLogin(true) : setIsLogin(false)
    }

    const getData = (data) => {
        // setLocationData('');
        setLocationData(data);
        setLocation(false)
    }

    const handleChange = (e) =>{
        const value = e.target.value;
       setInput(value);
    }

    const handleSearch = () => {
        
        navigate('/SearchPage', {state : { searchProduct : input}})
    }

    // const handleChange = (e) => {
    //     const somthing = e.target.value;
    //     setInput(somthing);
    //     fetchData(somthing);
    //     // console.log(somthing);
    // }

    // const fetchData = async(value) => {

    //     if(value){
    //         let result = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?`,{
    //             method:'GET',
    //             headers:{
    //                 projectID:'tpe45ahovz01'
    //             }
    //         })
    //         result = await result.json();
    //         console.log(result);
    //         const data = result.filter((product) => {
    //             return (
    //                 product.brand ||
    //                 product.features ||
    //                 product.category.toLowerCase().includes(value)
    //             )
    //         })
    //         setResults(data);
    //     }
        // fetch("https://jsonplaceholder.typicode.com/users")
        //   .then((response) => response.json())
        //   .then((json) => {
        //     const results = json.filter((user) => {
        //       return (
        //         value &&
        //         user &&
        //         user.name &&
        //         user.name.toLowerCase().includes(value)
        //       );
        //     });
        //     setResults(results);
        //   });
    //};

    // console.log(result);
    

    return (
       <>
       {/* <Router>
        <Link to='/'>Home</Link> */}
        <header className='fixed bg-black w-full text-white flex justify-between'>
            <Box>
                <div className='hidden items-center justify-between  w-full md:flex '> 
                    <div className='p-3 m-2 flex items-center gap-12 w-4/5 '>
                        <Link to='/'>
                            <div className="w-32 min-w-[128px] items-center">
                                <img src={logo} alt="Logo Loading..." className="w-full" />
                            </div>
                        </Link>
                        <div className="flex  items-center" onClick={menu}>
                            {flag ? <RxCross2 className="text-3xl" /> : <IoMenu className="text-3xl" /> }
                            <p className="text-sm cursor-pointer">Menu</p>
                        </div>
                        <div className="flex  items-center bg-white h-9 w-full max-w-md px-2 rounded-md ">
                            <input 
                            type="text" 
                            onChange={handleChange} 
                            placeholder="What are you looking for ?" 
                            className="w-full bg-transparent outline-none border-none px-3 placeholder:text-sm text-black cursor-text" />
                            <CiSearch onClick={handleSearch} className="text-black text-2xl cursor-pointer "/>
                            {/* value={input} onChange={handleChange} */}
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-9">
                        <div onClick={handleLocation} className="flex items-center gap-2 cursor-pointer">
                            <ImLocation className="text-xl"/>
                            <p className="whitespace-nowrap text-sm ">{locationData.state} {locationData.pincode}</p>
                            <IoPencil className="text-xs "/>
                        </div>
                        <div onClick={handleUser} className="flex items-center cursor-pointer">
                            <FaUserLarge className="size-5" />
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <BsCartFill className="size-5" />
                            <p className="text-xs bg-greenblue text-black w-3 h-3 m-1 flex item-center justify-center rounded-full  top-4 right-16">0</p>
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                            <div onClick={menu} className="flex  items-center">
                                {flag ? <RxCross2 className="text-3xl" /> : <IoMenu className="text-3xl cursor-pointer"/>}
                            </div>
                            <div className="w-20 min-w-[128px] items-center">
                                <img src={logo} alt="Logo Loading..." className="w-full" />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center">
                                <FaUserLarge />
                            </div>
                            <div className="flex items-center">
                               <BsCartFill />
                               <p className="text-xs bg-greenblue text-black w-4 h-4m flex item-center justify-center rounded-full absolute top-0 right-0">0</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex  items-center bg-white h-7 w-full max-w-full my-2 mt-2 px-2 rounded-md ">
                        <input 
                           type="text"  
                           placeholder="What are you looking for ?" 
                           onChange={handleChange}
                           className="w-full bg-transparent outline-none border-none px-3 placeholder:text-sm text-black" 
                        />
                        <CiSearch onClick={handleSearch} className="text-black text-2xl cursor-pointer"/>
                    </div> 
                    <div onClick={handleLocation} className="flex items-center gap-2 md:hidden 10 bg-black text-white px-2 py-1 cursor-pointer">
                        <ImLocation className="text-xl"/>
                        <p className="whitespace-nowrap text-sm">{locationData.state} {locationData.pincode}</p>
                        <IoPencil className="text-xs"/>
                    </div> 
                    
                </div>
            </Box>
            { flag && <Dropdown /> }
           
           
            { location && <Location onClick={getData} className="location-container" />}

            { isLogin && <LoginPage onClick={handleUser} />}
            
        </header>
        
           
            
        </>
        
       
    )
}

export default Header;