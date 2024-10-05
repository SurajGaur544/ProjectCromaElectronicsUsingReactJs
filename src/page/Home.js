import React from "react";
// import { ImLocation } from "react-icons/im";
// import { IoPencil } from "react-icons/io5";
// import headerImage from "../page/offer.webp";
// import headerImagemo from "../page/offermo1.webp";
import offerImage from "../assist/discount1.webp";
import offerImage2 from "../assist/discount2.webp";
import Box from "../components/Box";
import Slider from "./Slider";
// import Categories from "./Categories";
// import Products from "./Products";
import TopTrending from "../assist/TopTreanding/TopTrending";
import Topproducts from "./Topproducts";
import Toprateddeals from "./Toprateddeals";
import Dealsoftheday from "./Dealsoftheday";
// import Header from "../components/Header";
import Header from "../components/Header";


const Home = () => {
    return(
        <div className=" text-white justify-items-center" >
            <Header />
            <br /> <br /> <br /> 
            <Slider />
            <Box>
                <div className="grid grid-cols-2 divide-x gap-4 py-5">
                    <img src={offerImage} alt="loading" className="h-auto w-25%"  />
                    <img src={offerImage2} alt="loading" className="h-auto w-auto" />
                </div>
                <TopTrending className="absolute"/>
                <Dealsoftheday />
                <Topproducts />
                <Toprateddeals />
            </Box>
        </div>
    );
}
export default Home