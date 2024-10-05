import React from 'react'
import { MdOutlineStarPurple500, MdOutlineStarOutline } from "react-icons/md";
import { LiaStarHalfAltSolid } from "react-icons/lia";

function Star({ item , index}) { 

  const ratingStar = Array.from({length: 5},( elme, index) => {
    let number = index + 0.5;
  
    return (
      <div key={index}>
        <span >
          { item >= index + 1 ? (
            <MdOutlineStarPurple500 className='font-size-2rem text-orange-500 '/>
          ):item >= number ? (
            <LiaStarHalfAltSolid className='font-size-2rem text-orange-500 '/>
          ):(
            <MdOutlineStarOutline className='font-size-2rem text-orange-500 '/>
          )}
        </span>
      </div>
    )

  })

  return(
    <>
      <div key={index} className='flex'>
        {ratingStar}
      </div>
    </>
  )
}

export default Star;