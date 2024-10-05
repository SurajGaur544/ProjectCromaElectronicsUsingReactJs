import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cromaImage from '../assist/croma-image.jpg';
import Box from '../components/Box';
import Star from '../components/Star';
import Header from '../components/Header';

export const CardComponentPage = () => {
    const location = useLocation();
    const [data, setData] = useState([]);

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
            console.log( "Card => ",result.data);
        }catch(err){
            console.log(err);
        }
        
    }

    useEffect(()=> {
        fetchDatas(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"subCategory":"${location.state.productName}"}`);
    },[location.state]);
  return (
    <>
    <Header />
    <br /><br /><br />
    <div className='text-white'>
        <h1 className='text-4xl my-4 mx-8 font-bold capitalize'>{location.state.productName}</h1>
        <img src={cromaImage} alt='Loading' className='w-full' />
        <Box>
        <div className='grid grid-cols-4  gap-4 my-8 '>
        {data.map((item, index) => (
            <Link to={`/Productaboutpage/${item._id}`} key={index}>
                <div key={index} className='p-4 flex flex-col justify-cemter gap-2 bg-black rounded-md '>

                    <img src={item.displayImage} alt='Loading' className='p-3' />
                    <p className='font-bold text-lg pb-3 truncate text-nowrap overflow-hidden '>{item.name}</p>
                    <p className='font-bold text-lg'>&#8377; {item.price}</p>
                    <Star item={item.ratings} />
                </div>
            </Link >
        ))}
        </div>
        </Box>
    </div>
    </>
  )
}
