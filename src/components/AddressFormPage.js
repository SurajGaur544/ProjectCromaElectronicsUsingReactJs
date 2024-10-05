import React, { useState } from 'react'

const AddressFormPage = () => {
    const [data, setData] = useState({
        street:'',
        city:'',
        state:'',
        country:'',
        zipcode:''
    });

    const handleChange = (e) => {
        const value = e.target.value;
        const propertyName = e.target.name;
        setData({...data, [propertyName]: value})
    }

    const handleClick = () => {
        console.warn(data);
    }
  return (
    <div>
        <h1 className='flex flex-col  justify-ceneter text-3xl font-bold mb-6 px-8'>Enter your address</h1>
        <div className='flex flex-col justify-center gap-2 font-bold w-full '>
            <label htmlFor='street'>Street:</label>
            <input 
                type='text' 
                id='street' 
                name='street' 
                value={data.street}
                onChange={handleChange}
                placeholder='Enter your street' 
                className='bg-black text-white p-2 px-4 w-full border-none rounded-lg outline-none mb-4' 
            />

            <label htmlFor='city'>City:</label>
            <input 
                type='text' 
                id='city' 
                name='city' 
                value={data.city}
                onChange={handleChange}
                placeholder='Enter your city'
                className='bg-black text-white p-2 px-4 w-full border-none rounded-lg outline-none mb-4' 
            />

            <label htmlFor='state'>State:</label>
            <input 
                type='text' 
                id='state' 
                name='state'
                value={data.state}
                onChange={handleChange} 
                placeholder='Enter your state' 
                className='bg-black text-white p-2 px-4 w-full border-none rounded-lg outline-none mb-4'
            />

            <label htmlFor='country'>Country:</label>
            <input 
                type='text' 
                id='country' 
                name='country' 
                value={data.country}
                onChange={handleChange}
                placeholder='Enter your country' 
                className='bg-black text-white p-2 px-4 w-full border-none rounded-lg outline-none mb-4'
            />

            <label htmlFor='zipcode'>Zipcode:</label>
            <input 
                type='text' 
                id='zipcode' 
                name='zipcode' 
                value={data.zipcode}
                onChange={handleChange}
                placeholder='Enter your zipcode'
                className='bg-black text-white p-2 px-4 w-full border-none rounded-lg outline-none mb-4' 
            />

            <button 
            type='submit'
            onClick={handleClick}
            className='flex items-center justify-center p-2 w-full text-black bg-cyan-400 hover:bg-cyan-500 border-none rounded-lg'
            >Save Address</button>
        </div>
    </div>
  )
}

export default AddressFormPage