import SearchBar from "../searchBar/SearchBar";

function Header() {
  var angleIcon = <i className="bi bi-caret-down-fill"></i>;
  return (
    <>
      {" "}
      <section>
        <SearchBar />
        <div className="mx-auto w-[1280px]  px-[50px] py-3 border-b-2 ">
          <div className="flex justify-between gap-[20px] items-center">
            <button className="bg-[#0AAD0A] border rounded-[10px] font-[500] flex gap-2 text-white py-2 px-6">
              All Products
            </button>

            <nav>
              <ul className="flex gap-[50px]">
                <li>Home {angleIcon}</li>
                <li>Shop {angleIcon} </li>
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
