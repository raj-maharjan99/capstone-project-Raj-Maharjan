import SearchBar from "../searchBar/SearchBar";

function Header() {
  return (
    <>
      {" "}
      <section>
        <SearchBar />
        <div className="mx-auto w-[1280px] py-3 border-b-2 ">
          <button className="bg-[#0AAD0A] border rounded-[10px] font-[500] flex gap-2 text-white py-2 px-6">
            All Products
          </button>
        </div>
      </section>
    </>
  );
}

export default Header;
