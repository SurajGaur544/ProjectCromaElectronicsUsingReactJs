import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import Box from './Box';
import Star from './Star';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
// import Header from './Header';



const Productaboutpage =() => {
    const navigate = useNavigate()

    const {id: productId} = useParams();

    const [data, setData] = useState([]);
    const [ currImage, setCurrImage] = useState('');
    const [flag, setFlag] = useState(false);

    
    
    const fetchData = async() => {
        try{
           
            let response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${productId}`, {
                method: "GET",
                headers: {
                    projectId: "tpe45ahovz01"
                }
            })
            response = await response.json();
            setData([...data,response.data]);
            // console.warn("product about page => ",response.data);
        }catch(err){
            
            console.warn(err);
        }
    }

    useEffect(() => {
        fetchData();
        
    },[]);

    const handleClick = (id) => {
        navigate('/PaymentDetailsPage',{state : { PaymentDetailsPag : id}})
    }

    const fetchData2 = async() => {
        const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/review/${productId}`,{
            method:"GET",
            headers:{
                projectId: "tpe45ahovz01"
            }
        });
        const jsonRes = await res.json();
        console.warn("rating => ", jsonRes);
    }

    useEffect(() => {
        fetchData2();
    },[]);
  return (
    <div className=''>
       <Header />
        <Box >
            <div >
                { data.map((items, index) => (
                    <div key={index} className='text-white size-full w-full my-0'>
                        <br /> <br /> <br />
                        <div className='flex flex-row size-full w-full gap-8'>
                            <div className='flex w-full size-full  justify-between pt-6  '>
                               <div>
                                {items.images.map((data, index) => (
                                  <div key={index} onClick={() => !flag ? setFlag( true ) : setFlag(false)}> 
                                      {index <=5 ? <img src={data} onClick={() => setCurrImage(data)} alt='Loading'  className='flex flex-col size-16 border border-neutral-500 my-2 p-2' /> : <></> }
                                  </div>
                                ))} 
                               </div>
                               <div className='flex flex-row'>
                                <img   src={flag ? currImage : items.displayImage}  alt='Loading' className='size-96 p-8'/>
                                
                               </div>
                               <FaRegHeart className='text-white size-6'/>
                            </div>
                            <div className='flex flex-col pt-6  w-full   justify-center  '>
                                <h1 className='text-xl font-bold '>{items.name}</h1>
                                <div className='flex flex-row gap-2'>
                                    <div className='flex items-center justify-center p-2 m-2 text-pink-600 border rounded border-pink-600'>{items.brand}</div>
                                    <div className='flex items-center justify-center p-2 m-2 text-pink-600 border rounded border-pink-600'>{items.sellerTag}</div>
                                </div>
                                <div className='text-teal-400 '>{items.ratings}</div> <Star item={items.ratings} />
                                <p className="font-bold text-3xl mt-6 mb-2">&#8377; {items.price}</p>
                                <p className='text-sm'>(Inc. all Taxes)</p>
                                <hr className=''/>
                                <div className='flex p-4 justify-center flex-col border rounded border-neutral-500  my-2'>
                                    <h1 className='text-xl font-bold '>Key Features</h1>
                                    {items.features.map((data, index) =>(
                                        <li key={index}>{data}</li> 
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='border rounded p-8 border-neutral-500'>
                            <h1 className='text-xl font-bold py-4'>Overview</h1>
                            <div dangerouslySetInnerHTML={{__html: items.description}} >
                            
                            </div>
                        </div>
                        <div  className='flex flex-row gap-2 px-2 py-4 bg-zinc-900 z-40 w-full items-center justify-between fixed bottom-0' >
                            <div className='flex flex-row gap-2  justify-center items-center ' >
                                <img src={items.displayImage} alt='Loading...' className='size-20 ' />
                                <div className='flex flex-col justify-center'>
                                   <p>{items.name}</p>
                                   <p>&#8377; {items.price}</p>
                                </div>
                            </div>
                            <div className='flex flex-row gap-4 justify-center items-center m-2 pr-40 '>
                                <button onClick={ () => handleClick(items.id)} className='py-2 px-8 bg-teal-400 hover:bg-teal-500 rounded'>Buy Now</button>
                                <button className='py-2 px-8 border rounded backdrop-contrast-50 hover:backdrop-contrast-100   '>Add to cart</button>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
            <br /> <br /><br /> <br /><br /> 

        </Box>
       
    </div>
  )
}// flag ? image :      onClick={setFlag(true)} // onClick={setImage(data)}

export default Productaboutpage;