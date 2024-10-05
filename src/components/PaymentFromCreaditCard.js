import React, { useState } from 'react'

const PaymentFromCreaditCard = () => {
    const [data, setData] = useState({
        cardNumber:'',
        expiryDate:'',
        cvv:''
    });

    const handleChange = (e) => {
        const value = e.target.value;
        const propertyName = e.target.name;
        setData({...data, [propertyName]: value});
    }

    const handleClick = () => {
        console.warn(data);
    }
  return (
    <div>
        <h1 className='flex flex-col items-center justify-ceneter text-3xl font-bold mb-6'>Enter Credit Card Details</h1>
        <div className='flex flex-col justify-center gap-2 font-bold w-full '>
            <label htmlFor='cardNumber'>Card Number:</label>
            <input 
                type='text' 
                id='cardNumber' 
                name='cardNumber' 
                value={data.cardNumber}
                onChange={handleChange}
                placeholder='0000-0000-0000-0000' 
                className='bg-black text-white p-2 px-4 w-full border-none rounded-lg outline-none mb-4' 
            />

            <label htmlFor='expirydate'>Expiry Date (MM/YY):</label>
            <input 
                type='text' 
                id='expiryDate' 
                name='expiryDate'
                value={data.expiryDate}
                onChange={handleChange} 
                placeholder='MM/YY'
                className='bg-black text-white p-2 px-4 w-full border-none rounded-lg outline-none mb-4' 
            />

            <label htmlFor='cvv'>CVV:</label>
            <input 
                type='text' 
                id='cvv' 
                name='cvv'
                value={data.cvv}
                onChange={handleChange} 
                placeholder='000' 
                className='bg-black text-white p-2 px-4 w-full border-none rounded-lg outline-none mb-4'
            />

            <button 
            type='submit'
            onClick={handleClick}
            className='flex items-center justify-center p-2 w-full text-black bg-cyan-400 hover:bg-cyan-500 border-none rounded-lg'
            >Pay Now</button>
        </div>
    </div>
  )
}

export default PaymentFromCreaditCard