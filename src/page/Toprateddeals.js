import React, { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../App.css';
import Star from "../components/Star";

const Toprateddeals = () => {

    const [data, setData] = useState([]);
    
    const fetchData = async() => {
        try{
           
            let response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?", {
                method: "GET",
                headers: {
                    projectId: "tpe45ahovz01"
                }
            })
            response = await response.json();
            
            
            setData(response.data);
            // console.warn(response.data);
        }catch(err){
            
            console.warn(err);
        }
    }

    useEffect(() => {
        fetchData();
        
    },[]);



    let box = document.querySelector('.product-container2'); 
    const pressprevbtn = () => {
        
        box.scrollLeft = box.scrollLeft - 286;
    }

    const pressnextbtn = () => {
        
        box.scrollLeft = box.scrollLeft + 286;
    }
    return (
        <>
          <div>
            <h1 className="text-2xl text-white font-bold">Top Rated Deals</h1>
            <div className='flex  items-center'>  
            <button className="Button rounded-full p-4 flex float-left" onClick={pressprevbtn}><SlArrowLeft /></button>
                <div className="product-container2 flex py-10 overscroll-contain overflow-x-hidden ">
                    {data.filter((a) => a.sellerTag === "top rated").map((item, index) => (
                        <Link to={`/Productaboutpage/${item._id}`} key={index} >
                        <div className="flex justify-center  flex-col min-w-[270px] m-2 bg-slate-950 p-3 gap-2 cursor-pointer rounded-md"> 
                            <FaRegHeart className="text-white" />
                            <img src={item.displayImage} alt="Loading..." className="  " />
                            <p className="font-bold">{item.name}</p>
                            <p className="font-bold">&#8377; {item.price}</p>
                            <Star item={item.ratings} />
                        </div>
                        </Link>
                    ))}
                </div>    
            <button className="Button rounded-full p-4 flex float-right" onClick={pressnextbtn}><SlArrowRight /></button>
        </div>
          </div>
        </>
    )
}

export default Toprateddeals;

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with