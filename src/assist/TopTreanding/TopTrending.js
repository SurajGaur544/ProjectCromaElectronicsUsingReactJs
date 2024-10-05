// import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useNavigate } from 'react-router-dom'
import ConsumerVerdict from './ConsumerVerdict.gif';
import Mobiles from './Mobiles.webp';
import AirConditioners from './AirConditioners.webp';
import Telivisions from './Telivisions.webp';
import Refrigerator from './Refrigerators.webp';
import Laptops from './Laptops.webp';
import HeadPhonesEarPhones from './HeadPhones&EarPhones.webp';
import HomeTheater from './HomeTheatres&SoundBars.webp';
import WashingMachine from './WashingMachine.webp';
import Tablets from './Tablets.webp';
import Wearables from './Wearables.webp';
import Speakars from './Speakars&MedeaPlayer.webp';
import KitchenAppileance from './KitchenAppliances.webp';
import Accessories from './Accessories.webp';
import Coolers from './Coolers.webp';
import Fans from './Fans.webp';
import Microwaves from './Microwaves.webp';
import Camera from './Cameras.webp';
import './Toptreanding.css';

const TopTreandingProducts = [
    {path : ConsumerVerdict, name: 'health'},
    {path : Mobiles, name:'mobile'},
    {path : AirConditioners, name: 'ac',product:'AirConditioners'},
    {path : Telivisions, name: 'tv', product:'Telivisions'},
    {path : Refrigerator, name: 'refrigerator',product:'Refrigerator'},
    {path : Laptops, name: 'laptop',product:'Laptops'},
    {path : HeadPhonesEarPhones, name: 'audio',product:'HeadPhonesEarPhones'},
    {path : HomeTheater, name: 'audio',product:'HomeTheater'},
    {path : WashingMachine, name: 'washingMachine',product:'WashingMachine'},
    {path : Tablets, name: 'tablet',product:'Tablets'},
    {path : Wearables, name: 'audio'},
    {path : Speakars, name: 'audio'},
    {path : KitchenAppileance, name: 'kitchenppileance'},
    {path : Accessories, name: 'travel'},
    {path : Coolers, name: 'Coolers'},
    {path : Fans, name: 'Fans'},
    {path : Microwaves, name: 'Microwaves'},
    {path : Camera, name: 'Camera'}
];



const TopTrending = () => {
    // const [increment, setIncrement] = useState(0);

    // const handleClick = () => {
    //     increment == 17 ? setIncrement(0) : setIncrement(increment+1)
    // }
    const navigate = useNavigate()

    let box = document.querySelector('#product-container7'); 
    const pressprevbtn = () => {
        let width =  box.clientWidth;
        console.warn(width);
        box.scrollLeft = box.scrollLeft- width;
    }

    const pressnextbtn = () => {
        let width = box.clientWidth;
        console.warn(width);
        box.scrollLeft = box.scrollLeft+ width;
    }

    const handleClicking = (product) => {
        navigate('/CardComponentPage',{state : { productName: product}})
    }

    // const checkLenth = () => {
    //     return <> if(TopTreandingProducts.length % 2 == 0) {
    //         TopTreandingProducts.length 
    //     }
    //     </> 
    // }

    // let b = TopTreandingProducts.filter(checkLenth);


    return(
        <>
        
        {/* <img src={TopTreandingProducts[increment]} className="size-32"/>  mo. no. => 7669610805  ,  1800116677 , 08069216201  
        <button onClick={handleClick}>Next</button> */}
        <div className='flex justify-center items-center'>  
            <button className="Button flex float-left rounded-full p-4" onClick={pressprevbtn}><SlArrowLeft /></button>
                <div  className="product-container7 flex py-10 overscroll-contain overflow-x-hidden">
                    {TopTreandingProducts.map((item, index) => (
                        
                        <img key={index} src={item.path} alt="Loading" id="product-container7" onClick={() => handleClicking(item.name)} className='size-44 cursor-pointer'/>
                        
                    ))}
                </div>    
            <button className="Button flex float-right rounded-full p-4" onClick={pressnextbtn}><SlArrowRight /></button>
        </div>
        
        </>
        
    )
}
export default TopTrending;