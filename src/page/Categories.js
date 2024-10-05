import React, { useEffect, useState } from "react";

const Categories = () => {
    const [category, setCategory] = useState([]);
    const fetchData = async (url) => {
        try{
            let res = await fetch(url, {
                method:'GET',
                headers:{
                    projectId: "tpe45ahovz01",
                    "Content-Type":"Application/json",
                    "Accept": "application/json"
                }
            });
            let json = await res.json();
            setCategory([...category,json]);
            // console.log( "Top Treanding => ",json);
            
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData("https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?");
    },[])
    return(
        <>
          <div>
            { category && <h1 className="text-white">This is Categories page</h1>}

            {category.map((item) => (
                <div>
                    <img src={item.displayImage} alt="Loading" />
                    <p>{item.brand}</p>
                    <p>{item.data.category}</p>
                </div>
            ))}

            
          </div>
        </>
    )
}
export default Categories;