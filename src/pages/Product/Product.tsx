import React, { useState, useEffect } from "react";

function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(product);
  return (
    <>
      <section>
        <div className="container py-2 px-5 text-center   mx-auto w-[1280px] bg-[#EDF1FF] ">
          <div className="  flex justify-evenly gap-[20px]  flex-wrap items-center">
            {product.map((item) => (
              <div key={item.id} className=" w-[300px] border p-3 shadow-2xl">
                <h2 className="font-[800] text-amber-800 text-[20px] uppercase">
                  {item.category}
                </h2>
                <img src={item.thumbnail} className="w-full h-[200px]" alt="" />
                <div className="flex justify-between py-2">
                  <p>{item.brand}</p>
                  <span className="text-orange-400">Rating: {item.rating}</span>
                  <p>Price: ${item.price} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
