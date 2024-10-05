import React from 'react'
import AddressFormPage from './AddressFormPage'
import PaymentFromCreaditCard from './PaymentFromCreaditCard'
import Box from './Box'
import Header from './Header'

const PaymentDetailsPage = () => {
  return (
    <>
    <div className='top-0'>
       <Header />
    </div>
    <br /><br /> <br /><br />
    <Box>
    <div className='text-white flex flex-col items-center justify-around md:flex-row gap-8 '>
        <div className='flex flex-row items-center justify-center' >
            <AddressFormPage />
        </div>
        <div className='flex flex-row items-center justify-center'>
            <PaymentFromCreaditCard />
        </div>
    </div>
    </Box>
    </>
  )
}

export default PaymentDetailsPage