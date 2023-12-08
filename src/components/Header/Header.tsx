import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import "./Header.css";
function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };
  var angleIcon = <i className="bi bi-caret-down-fill"></i>;
  return (
    <>
      {" "}
      <section>
        <SearchBar />
        <div className="mx-auto w-[1280px]  px-[50px] py-3 border-b-2  ">
          <div className="flex justify-between gap-[20px] items-center">
            <button
              className="buttunEffect bg-[#0AAD0A] border rounded-[10px]   
font-[500] flex gap-2 text-white py-2 px-6"
            >
              All Products
            </button>

            <nav>
              <ul className="flex gap-[50px]">
                <li>Home {angleIcon}</li>
                <li
                  onClick={toggleDropdown}
                  // onMouseOut={hideDropdown}
                  // onBlur={hideDropdown}
                  // onFocus={toggleDropdown}
                >
                  Shop <span>{angleIcon}</span>
                  <ul
                    className={
                      showDropdown
                        ? "bg-white  shadow text-center rounded-2xl  font-semibold py-2 px-2  flex flex-col  "
                        : "d-none"
                    }
                  >
                    <li className="hover:bg-yellow-600 shadow-inner">
                      Smartphone
                    </li>
                    <li className="hover:bg-orange-500 shadow-lg">
                      Apple Watch
                    </li>
                    <li className="hover:bg-green-600">Mac Book</li>
                  </ul>
                </li>
                <li>Contact</li>
                <li>Pages {angleIcon}</li>
                <li>Account</li>
                <li>About {angleIcon}</li>
              </ul>
            </nav>
            <div className="flex gap-2 items-center">
              <img className="w-[22px] h-[15px]" src="images/uk.png" alt="" />
              <p>English {angleIcon}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
