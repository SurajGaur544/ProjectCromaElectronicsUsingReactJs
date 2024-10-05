import React, { useEffect, useState } from "react";
import { HiMiniChevronRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
    const [item, setItem] = useState([]);
    const navigate = useNavigate();
    const fetchData = async (url) => {
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
            setItem(result.data);
            // console.log( "category => ",result.data);
        }catch(err){
            console.log(err);
        }
        
    }

    useEffect(()=> {
        fetchData('https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories');
    },[]);

    const handleClick = (product) => {
        navigate('/ProductCardsComponent', {state: {searchProduct : product}})
    }

    return(
        <>
            <div className="absolute w-full ">
                
                {/* { 
                    item.map((product) => { */}
                        <div   className="absolute top-16  left-72  bg-black text-white p-4 w-64 float-left ">
                            <h2 className="text-xl m-2 ">Shop by Category</h2>
                            {item.map((data, index) => 
                            <div key={index} onClick={() => handleClick(data)} className="flex justify-between items-center w-56 hover:bg-violet-600 px-4 py-1 rounded-lg hover:text-black ">
                                <p  value={data} className="cursor-pointer" >{data}</p>
                                <HiMiniChevronRight className="size-8 cursor-pointer"/>
                            </div>
                            )}
                        </div>
                    {/* })
                } */}
            </div>
        </>
    )
}
export default Dropdown;