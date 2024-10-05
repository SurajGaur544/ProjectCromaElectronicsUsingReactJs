import React, { createContext, useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import '../App.css';
import { Link, useParams } from "react-router-dom";
import Star from "../components/Star";
// import Productaboutpage from "../components/Productaboutpage";
// import { useNavigate} from 'react-router-dom'

export const context = createContext()

const Dealsoftheday = () => {

    const [data, setData] = useState([]);
    // const [flag, setFlag] = useState(false);
    // const [id, setId] = useState('');
    // const navigate = useNavigate();
    
    
    
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



    let box = document.querySelector('.product-container3'); 
    const pressprevbtn = () => {
        
        box.scrollLeft = box.scrollLeft - 286;
    }

    const pressnextbtn = () => {
        
        box.scrollLeft = box.scrollLeft + 286;
    }

    // if(flag){
    //     navigate('/Productaboutpage');
    // }
    return (
        <>
            <div>
                <h1 className="text-2xl text-white font-bold"> Deal of the Day</h1>
                <div className='flex  items-center'>  
                    <button className="Button flex float-left rounded-full p-4" onClick={pressprevbtn}><SlArrowLeft /></button>
                        <div className="product-container3 flex py-10 overscroll-contain overflow-x-hidden ">
                            {data.filter((a) => a.sellerTag === "new arrival").map((item, index) => (
                                <Link to={`/Productaboutpage/${item._id}`} key={index} >
                                <div title= {item._id}   className="flex justify-center  flex-col min-w-[270px] m-2 bg-slate-950 p-3 gap-2 cursor-pointer rounded-md "> 
                                    <FaRegHeart className="  text-white z-50 top-0 right-0" />
                                    <img src={item.displayImage} alt="Loading..." className="  " />
                                    <p className="font-bold">{item.name}</p>
                                    <p className="font-bold">&#8377; {item.price}</p>
                                    <Star item={item.ratings} />
                                    
                                </div>
                                </Link>
                                
                            ))}
                        </div>    
                    <button className="Button flex float-right rounded-full p-4" onClick={pressnextbtn}><SlArrowRight /></button>
                </div>
            </div>
        </>
    )
}

export default Dealsoftheday;

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with