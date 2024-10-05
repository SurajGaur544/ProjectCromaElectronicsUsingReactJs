import React,{ useEffect, useState} from 'react';
import { ImLocation } from "react-icons/im";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Box from './Box';
// import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import  "../App.css";
// import Header from './Header';
import Star from './Star';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';

var brands = [ 
    'All','OnePlus','Xiaomi','Croma','Apple','Samsung','Redmi','Lenovo','I KALL','LG','Sony','Kevin','TCL','Realme','Compaq',
    'Tropicool','Haier','Voltas Beko','Whirlpool','Godrej','HP','Asus','Acer','Dell','IRA','Daikin','Voltas','Hisense','O General',
    'Lloyd','White Westinghouse','Foxsky','Philips','Portronics','BoAt','Bose','JACK MARTIN','JBL','Zebronics','Ambrane',
    'Sonos','Panasonic','Bajaj','ZunVolt','KENT','PIGEON','Wonderchef','Agaro','Nestle','Hurom','Borosil','Havells','Bosch',
    'Lifelong','Rico','Elica','Treo','Black & Decker','Oracura','Zip Care','Traveldoo','Aeropostale','Olympus','Arctic Fox',
    'Sky Bags','Travel Blue','Boompods','Dyson','Aristocrat','Eveready','GM','Carbonado','Go Pro','IFFALCON','BLAUPUNKT TV',
    'XElectron','Kodak','Sansui','RD Plast','Akai','Onida','IFB','Toshiba' 
]


const SearchPage = () => {

    const [category, setCategory] = useState(false);
    const [brand, setBrand] = useState(false);
    // const [data, setData] = useState([]);
    const [item, setItem] = useState([]);
    const [data, setData] = useState([]);
    const location = useLocation();
    const [Sort, setSort] =  useState();
    const [page, setPage] = useState(1);

    console.log(location.state.searchProduct);

    const handleCategory = () => {
        !category ? setCategory(true) : setCategory(false)
    }

    var catpro;
    category ? catpro = 20 : catpro = 6

    const handleBrand = () => {
        !brand ? setBrand(true) : setBrand(false)
    }

    var brandpro;

    brand ? brandpro = 20 : brandpro = 3

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



    const fetchDatas = async (url) => {
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
            setData(result.data);
            // console.log( "SearchProduct => ",result.data);
        }catch(err){
            console.log(err);
        }
        
    }
    var product;
    const handleClick = (product) => {
        
         product = product;
    }

    useEffect(()=> {
        fetchDatas(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"subCategory":"${location.state.searchProduct}"}`);
    },[location.state]);


console.warn(Sort);
const AscendingOrder = () => {
    let RecData = [...data];
    if(RecData.length > 0 ){
        const result = RecData.sort((a, b) => a.price.localeCompare(b.price));
        setData(result);
    }
}


const DeAscendingOrder = () => {
    let RecData = [...data];
    if(RecData.length > 0 ){
        const result = RecData.sort((a, b) => b.price - a.price);
        setData(result);
    }
}

const sorting = (e) => {
    const value = e.target.value()

    console.warn(value);

}
  const selectPageHandler = (selectedPage) => {
       if(selectedPage >= 1 && selectedPage <= data.length/10 && selectedPage !== page){
        setPage(selectedPage);
       }
  }
    

  return (
    <>
    <Header />
    <br /> <br /> <br /> 
    <Box>
        
       
    <div className='text-white flex flex-col '>
        <div className='text-white flex flex-row divide-x  '>
            <div className='m=8 gap-2 font-bold'>
                <h3 className='m-2'>SORT BY</h3>
                <select name="cars" id="cars" className='bg-black p-4 m-2' value={Sort} onClick={sorting}>
                    <option onClick={AscendingOrder} value="Price low to high" className='p-2 gap-2'>Price low to high</option>
                    <option onClick={DeAscendingOrder} value="Price high to low" className='p-2 gap-2'>Price high to low</option>
                    <option value="Product (a-z)" className='p-2 gap-2'>Product (a-z)</option>
                    <option value="Product (z-a)" className='p-2 gap-2'>Product (z-a)</option>
                </select>
    
                <h3 className='m-2'>FILTER BY</h3>
                <hr  className='m-2'/>
                <p className='m-2' >CATEGORIES</p>
                {item.filter((item) => item.length < catpro).map((data, index) => 
                    <div key={index} className="flex justify-between items-center w-56 hover:bg-violet-600 px-4 py-1 rounded-lg hover:text-black cursor-pointer">
                    <p onClick={() => handleClick(data)} value={data}>{data}</p>
                                  
                    </div>
                )}
                {
                !category ?
                <p onClick={handleCategory} className='text-cyan-300 cursor-pointer underline hover:no-underline hover:text-cyan-500 '>See More +</p>
                :
                <p onClick={handleCategory} className='text-cyan-300 cursor-pointer underline hover:no-underline hover:text-cyan-500 '>See Less -</p>
                }
    
                <h2 className='mt-4'>Brands</h2>
    
                {brands.filter((item) => item.length < brandpro).map((brand, index) => 
                   <div key={index} className="flex justify-between items-center w-56 mt-4 hover:text-cyan-300 px-4 py-1 rounded-lg hover:text-black cursor-pointer" >
                    <p onClick={() => handleClick(brand)} value={brand} >{brand}</p>
                   </div>
                )}
                {
                    !brand ?
                    <p onClick={handleBrand} className='text-cyan-300 cursor-pointer underline hover:no-underline hover:text-cyan-500 '>See More +</p>
                    :
                    <p onClick={handleBrand} className='text-cyan-300 cursor-pointer underline hover:no-underline hover:text-cyan-500 '>See Less -</p>
                }
                <div className='flex flex-row w-full items-center justify-around mt-4'>
                   <label>Price</label>
                   <p>20000</p>
                </div>
                <div className='flex flex-row w-full items-center justify-center mt-2'>
                   <input type='range' className='range'/>
                </div>
                <div className='flex flex-row w-full items-center justify-center mt-4 corsor-pointer' >
                <button className='button px-10 py-4 my-4 border rounded border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black  '>CLEAR FILTER</button>
                </div>
            </div>
            <div className='flex flex-col divide-y w-full'>
                <h1 className='text-white font-bold size-4xl p-4'>Results for "{location.state.searchProduct}"</h1>
                {data.slice(page * 10 - 10 ,  page * 10).map((items, index) => 
                    <Link to={`/Productaboutpage/${items._id}`} key={index}>
                        <div  className='m-2 p-2 flex flex-row items-center justify-around font-bold'> 
                            <div>
                                <img 
                                   src={items.displayImage} 
                                   alt='Loading Product...' 
                                   className='flex items-center justify-center p-8 size-80 '
                                />
                            </div>
                            <div>
                                <h1 className='max-w-80'>{items.name}</h1>
                                <div className='flex flex-row gap-2'>
                                    <div className='flex items-center justify-center p-2 m-2 text-pink-600 border rounded border-pink-600'>{items.brand}</div>
                                    <div className='flex items-center justify-center p-2 m-2 text-pink-600 border rounded border-pink-600'>{items.sellerTag}</div>
                                </div>
                                <div className='text-teal-400 '>{items.ratings}</div> <Star item={items.ratings} />
                                <p className="font-bold text-3xl mt-6 mb-2">&#8377; {items.price}</p>
                                <p className='text-sm'>(Inc. all Taxes)</p>
                                <div className='flex flex-row gap-2 mt-2 '>
                                <ImLocation /><p>Delivery at: </p><p className='underline text-teal-400'>Mumbai, 400019</p>
                                </div>
                                
                            </div>
                            <div className=' top-0 right-0'>
                               <FaRegHeart className='text-white size-6'/>
                            </div>
            
                       
                        </div>
                    </Link>
                )}
             
            </div>
        </div>
        <div className='flex items-center justify-center flex-row'>
            {data.length > 0 && 
                <div className='flex items-center justify-center flex-row gap-2'>
                    <span onClick={() => selectPageHandler(page - 1)} id={page > 1 ? "" : "btn_disable"} className='flex items-center justify-center flex-row bg-white text-black cursor-pointer p-2 rounded-full size-10 font-size-10 ' >◀<FaAngleLeft /></span>
                     
                    {[...Array(data.length/10)].map((_,i) => {
                         return <div key={i} className='p-[2px] m-[2px] text-white' id={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</div>
                    })}
         
                    <span onClick={() => selectPageHandler(page+1)} id={page < data.length/10 ? "" : "btn_disable"} className='flex items-center justify-center flex-row bg-white text-black cursor-pointer p-2 rounded-full size-10 font-size-10 ' ><FaAngleRight />▶</span>
                </div>
            }

        </div>
    </div>
    </Box>
    </>
  )
}

export default SearchPage