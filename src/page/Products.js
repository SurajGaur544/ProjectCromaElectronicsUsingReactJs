import React, { useEffect, useState } from "react";

const Products = () => {

    const [products, setProducts] = useState([]);

    const fetchData = async (url) => {

        try{
            const res = await fetch(url, {
                method:"GET",
                headers: {
                    projectId: "tpe45ahovz01"
                }
            })
            const jsonData = await res.json();
            // console.log( "products => ",jsonData);
            setProducts([...products, jsonData]);
        }catch(err){
            console.log(err);
        }
        
    }

    useEffect(() => {
        fetchData(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?`)
    },[]);

    return(
        <>
         <h1>This is Products page</h1>
         { products.map( (item)=>
            <div key={item._id}>
                <p>{item.data.category}</p>
            </div>
         )}
         <div>

         </div>
        </>
    )
}

export default Products;

 