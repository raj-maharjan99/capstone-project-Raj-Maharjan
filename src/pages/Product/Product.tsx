import React, { useState, useEffect } from "react";
import Button from "../../Buttun/Button";
import MyButton from "../../Buttun/MyButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/cartSlice";
function Product() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  console.log(product);

  return (
    <>
      <section>
        <div className="container py-[50px] px-5 text-center   mx-auto w-[1280px] bg-[#EDF1FF] ">
          <div className="  flex justify-evenly gap-[20px]  flex-wrap items-center">
            {product.map((item) => (
              <div key={item.id} className=" w-[300px] border p-3 shadow-2xl">
                <div className="flex justify-between items-center py-3">
                  <h2 className="font-[800] text-orange-300 text-[20px] uppercase">
                    {item.category}
                  </h2>
                  <p className="  text-[#AB192B] ">
                    <a href="">
                      <i className="bi bi-bag-heart-fill" />
                    </a>
                  </p>
                </div>
                <img src={item.thumbnail} className="w-full h-[200px]" alt="" />
                <div className="flex justify-between py-2">
                  <p>{item.brand}</p>

                  <button
                    onClick={() => dispatch(addItem(item))}
                    className="bg-blue-200  hover:bg-slate-600 hover:text-white  text-[10px] font-bold  rounded-md py-1 px-2"
                  >
                    Add To Cart
                  </button>

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
