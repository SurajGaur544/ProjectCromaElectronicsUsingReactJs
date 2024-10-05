import React, { useState } from 'react';

function Location( props ) {
    const [error, setError] = useState(false);
    const [data, setData] = useState({
        pincode: "",
        state: ""
    });

    const handleInputData = (e) => {
        const value = e.target.value;
        const valueName = e.target.name;
        setData({...data, [valueName]: value});

        if(e.target.value.length < 3 ) {
            setError(true);
        }
        else{
            setError(false);
        }
    }

    const collectData = (e) => {
        e.preventDefault();
        props.onClick(data);
       
    }
    
  return (
    <div className='absolute bg-black text-white flex justify-center flex-col z-10 items-center p-10 gap-4 z-50'>
        <div className='flex justify-center flex-col items-center p-2 gap-2'>
            <h1 className='text-xl font-bold'>SELECT YOUR LOCATION</h1>
            <h3 className='font-bold'>To Check Products & Delivery Options available at your location</h3>
        </div>
        <div className='flex justify-center flex-col items-center p-2 gap-8 min-w-96'>
            <input 
                type='text' 
                name='pincode'
                onChange={handleInputData}
                value={data.pincode}
                placeholder='Enetr your pincode'
                className='bg-black text-white p-2 px-4 border rounded w-full' 
            />
            <input 
                type='text' 
                name='state'
                onChange={handleInputData}
                value={data.state}
                placeholder='Enter your state' 
                className='bg-black text-white p-2 px-4 border rounded w-full' 
            />
        </div>
        {error && <p className='-mt-4 text-red-600'>All Fields must be filled</p>}
        <div className='flex justify-center flex-col items-center p-2 gap-8 min-w-96'>
            <button 
                type='submit' 
                action="" 
                onClick={collectData}
                className='rounded bg-cyan-400 hover:bg-cyan-600  text-black font-bold  w-full p-2'
            >Continue</button>
        </div>
       
    </div>
  )
}

export default Location