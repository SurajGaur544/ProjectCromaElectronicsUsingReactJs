import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import s1 from '../assist/offer.webp';
import s2 from '../assist/HP_AC_28Feb2024_kqwkaf.webp';
import s3 from '../assist/HP_CCTV_28Feb2024_dwne8h.webp';
import s4 from '../assist/HP_laptop_28Feb2024_luab5p.webp';
import s5 from '../assist/HP_SB_28Feb2024_dyftdc.webp';
import s6 from '../assist/HP_Tablets_28Feb2024_we7isx.webp';
import s7 from '../assist/HP_WM_28Feb2024_nfvetn.webp';
import s8 from '../assist/HP_wedding_14feb_wvh8wv.webp';
import  "../App.css";

const sliderImage = [
    s1,s2,s3,s4,s5,s6,s7,s8
]


const Slider = () => {

    const [increment, setIncrement] = useState(0);
    const count = useRef(1);
    const handlePrevius = useCallback(() => {
         increment === 0 ? setIncrement(sliderImage.length - 1) : setIncrement(increment-1) 
        
    },[increment]);
    
    const handleNext =() => {
        
        setIncrement((increment+1) % sliderImage.length);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
            count.current += 1;
        }, 5000)
        return() => {
            clearTimeout(timer);
        }
    },[increment]);

    return (
        <>
        <div className="justify-items-center">
            <div className="flex">   
             <button onClick={handlePrevius} className="Button absolute left-10  rounded-full p-4 top-56 text-white-100 z-40 "><SlArrowLeft className="text-white-100"/></button>
                <div>
                    <img 
                        src={sliderImage[increment]}
                        alt="Loadding.. " 
                        className=""
                    />
                </div>
                <button onClick={handleNext} className="Button absolute right-10  rounded-full p-4 top-56 text-white"><SlArrowRight /></button>
            </div>
            <div className="w-full flex align-center h-3 justify-center gap-2 ">
                {increment === 0 ? <div onClick={() => setIncrement(0)} className="h-2 w-2 bg-white font-bold rounded cursor-pointer"></div> : <div onClick={() => setIncrement(0)} className="h-2 w-2 bg-slate-400 rounded cursor-pointer"></div>}
                {increment === 1 ? <div onClick={() => setIncrement(1)} className="h-2 w-2 bg-white font-bold rounded cursor-pointer"></div> : <div onClick={() => setIncrement(1)} className="h-2 w-2 bg-slate-400 rounded cursor-pointer"></div>}
                {increment === 2 ? <div onClick={() => setIncrement(2)} className="h-2 w-2 bg-white font-bold rounded cursor-pointer"></div> : <div onClick={() => setIncrement(2)} className="h-2 w-2 bg-slate-400 rounded cursor-pointer"></div>}
                {increment === 3 ? <div onClick={() => setIncrement(3)} className="h-2 w-2 bg-white font-bold rounded cursor-pointer"></div> : <div onClick={() => setIncrement(3)} className="h-2 w-2 bg-slate-400 rounded cursor-pointer"></div>}
                {increment === 4 ? <div onClick={() => setIncrement(4)} className="h-2 w-2 bg-white font-bold rounded cursor-pointer"></div> : <div onClick={() => setIncrement(4)} className="h-2 w-2 bg-slate-400 rounded cursor-pointer"></div>}
                {increment === 5 ? <div onClick={() => setIncrement(5)} className="h-2 w-2 bg-white font-bold rounded cursor-pointer"></div> : <div onClick={() => setIncrement(5)} className="h-2 w-2 bg-slate-400 rounded cursor-pointer"></div>}
                {increment === 6 ? <div onClick={() => setIncrement(6)} className="h-2 w-2 bg-white font-bold rounded cursor-pointer"></div> : <div onClick={() => setIncrement(6)} className="h-2 w-2 bg-slate-400 rounded cursor-pointer"></div>}
                {increment === 7 ? <div onClick={() => setIncrement(7)} className="h-2 w-2 bg-white font-bold rounded cursor-pointer"></div> : <div onClick={() => setIncrement(7)} className="h-2 w-2 bg-slate-400 rounded cursor-pointer"></div>}
            </div>
        </div>
        </>
    )
}
export default Slider;