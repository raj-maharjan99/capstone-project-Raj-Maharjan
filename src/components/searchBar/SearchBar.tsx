import ".././Header/Header.css";
function SearchBar() {
  return (
    <>
      <section>
        <div className="mx-auto w-[1280px] px-[20px] py-3  ">
          <div className="flex justify-between">
            <div className="flex">
              <p className="text-[25px] hover:text-blue-500  font-[700]">
                <span className=" buttunEffect border rounded-r-xl    hover:text-blue-700 hover:bg-orange-600 px-[15px] py-[4px] text-[25px]  text-[#F9D171] ">
                  ECOMMERCE
                </span>{" "}
                Shopper
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex">
                <input
                  className="border  px-2 w-[500px]"
                  type="text"
                  placeholder="Search for products..."
                />

                <p className="border  text-[#001E2B] py-2 px-2">
                  <i className="bi bi-search"></i>
                </p>
              </div>
              <p className="border rounded-[10px] font-[500] flex gap-2 text-[#001E2B] py-2 px-6">
                <i className="bi bi-geo-alt-fill"></i>
                <span>Location</span>{" "}
              </p>
            </div>
            <div className="flex gap-1">
              <p className="border rounded-[10px] text-[#AB192B] py-2 px-6">
                <i className="bi bi-heart-fill"></i>
              </p>
              <p className="border rounded-[10px] text-[#001E2B] py-2 px-6">
                <i className="bi bi-person-circle"></i>
              </p>
              <p className="border rounded-[10px] text-[#001E2B]   py-2 px-6">
                <i className="bi bi-cart-fill"></i>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchBar;
