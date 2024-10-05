import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ImLocation } from "react-icons/im";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Box from '../components/Box';
import Star from '../components/Star';
import Header from '../components/Header';

const ProductCardsComponent = () => {
    const [data, setData] = useState([]);
    const location = useLocation();

    const fetchDatas = async (url) => {
        try{
            let result = await fetch(url, {
                method:'GET',
                headers:{
                    projectId: "tpe45ahovz01",
                    "Content-Type":"Application/json",
                    "Accept": "application/json"
                }
            });
            result = await result.json();
            setData(result.data);
            // console.log( "Card => ",result.data);
        }catch(err){
            console.log(err);
        }
        
    }

    useEffect(()=> {
        fetchDatas(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"subCategory":"${location.state.searchProduct}"}`);
    },[location.state]);
  return (
    <>
    <Header />
    <br /> <br /> <br /><br />
    <Box>
        <div className='divide-y'>
        {data.map((item, index) => (
           
            <div key={index} className='flex flex-row text-white  p-2 items-center justify-center gap-2 '>
                 <Link to={`/Productaboutpage/${item._id}`} key={index} className='flex flex-row text-white  p-2 items-center justify-center gap-2'>
                <div className=' items-center justify-center '>
                    <img src={item.displayImage} alt='Loading' className='size-96 p-2 w-full ' />
                </div>
                <div className='w-full justify-center ml-8'>
                    <h1 className='text-xl font-bold '>{item.name}</h1>
                    <div className='flex flex-row gap-2 '>
                        <div className='flex items-center justify-center p-2 m-2 text-pink-600 border rounded border-pink-600'>{item.brand}</div>
                        <div className='flex items-center justify-center p-2 m-2 text-pink-600 border rounded border-pink-600'>{item.sellerTag}</div>
                    </div>
                    <div className='text-teal-400 '>{item.ratings}</div> <Star item={item.ratings} />
                    <p className="font-bold text-3xl mt-6 mb-2">&#8377; {item.price}</p>
                    <p className='text-sm'>(Inc. all Taxes)</p>
                    <div className='flex flex-row gap-2 mt-2 '>
                        <ImLocation /><p>Delivery at: </p><p className='underline text-teal-400'>Mumbai, 400019</p>
                    </div>
                </div>
                <div className=' items-center justify-center '>
                    <FaRegHeart className='text-white size-6'/>
                </div>
                </Link>
            </div>
           
        ))}
        </div>
    </Box>
    </>
  )
}

export default ProductCardsComponent;