import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import "./Header.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Product from "../../pages/Product/Product";
import Smartphone from "../../pages/Smartphone/Smartphone";
import DropdownMenu from "../Footer/DropdownMenu";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [fashionDropdown, setFashionDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };
  const toggleDropdowns = () => {
    setFashionDropdown(!fashionDropdown);
  };

  const hideDropdowns = () => {
    setFashionDropdown(false);
  };
  var angleIcon = <i className="bi bi-caret-down-fill"></i>;
  return (
    <>
      <section>
        <SearchBar />
        <div className="mx-auto w-[1280px]  px-[50px] py-3 border-b-2  ">
          <div className="flex justify-center gap-[20px] items-center">
            <Link to="/product">
              <button
                className="buttunEffect bg-[#0AAD0A] border rounded-[10px]   
font-[500] flex gap-2 text-white py-2 px-6"
              >
                All Products
              </button>
            </Link>

            <nav>
              <ul className="flex gap-[50px] font-semibold">
                <Link to={"/"}>
                  <li className="navEffect">Home</li>
                </Link>
                <li
                  onClick={toggleDropdown}
                  // onMouseOut={hideDropdown}
                  // onBlur={hideDropdown}
                  // onFocus={toggleDropdown}
                  className="buttunEffect flex gap-1 "
                >
                  <span> Gadgets</span> <span>{angleIcon}</span>
                  <ul
                    className={
                      showDropdown
                        ? "border  shadow text-center rounded-2xl   font-semibold py-2 px-2 flex flex-col  "
                        : "d-none"
                    }
                  >
                    <Link to={"/smartphone"}>
                      {" "}
                      <li className="   hover:bg-yellow-600 shadow-inner">
                        Smartphone
                      </li>
                    </Link>
                    <li className="hover:bg-blue-700">Apple Watch</li>
                    <li className="hover:bg-green-600">Mac Book</li>
                  </ul>
                </li>
                <li className=" ">
                  <DropdownMenu
                    item3={"LG"}
                    item4={"MOTOROLA"}
                    item2={" IPHONE"}
                    main={"Smartphone"}
                    item1={"SAMSUNG"}
                    title={"OPPO"}
                  />
                </li>
                <li
                  onClick={toggleDropdowns}
                  // onMouseOut={hideDropdown}
                  // onBlur={hideDropdown}
                  // onFocus={toggleDropdown}
                  className="buttunEffect flex gap-1  "
                >
                  <span>Fashion</span> <span>{angleIcon}</span>
                  <ul
                    className={
                      fashionDropdown
                        ? "border  shadow text-center rounded-2xl   font-semibold py-2 px-2 flex flex-col  "
                        : "d-none"
                    }
                  >
                    <Link to={"/smartphone"}>
                      {" "}
                      <li className="   hover:bg-yellow-600 shadow-inner">
                        Googles
                      </li>
                    </Link>
                    <li className="hover:bg-blue-700">Shoes</li>
                    <li className="hover:bg-green-600">Clothes</li>
                  </ul>
                </li>
                <li className="navEffect">Account</li>
                <li className="buttunEffect flex gap-1">
                  {" "}
                  <span>About</span> <span>{angleIcon}</span>
                </li>
              </ul>
            </nav>
            <div className="flex gap-2 items-center">
              <img className="w-[22px] h-[15px]" src="images/uk.png" alt="" />
              <DropdownMenu
                main={"Language"}
                item1={"한국어"}
                title={"नेपाली"}
                item2={" ENGLISH"}
                item3={"ESPANOL"}
                item4={"हिन्दी"}
              />
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/smartphone" element={<Smartphone />} />
      </Routes>
    </>
  );
}

export default Header;
