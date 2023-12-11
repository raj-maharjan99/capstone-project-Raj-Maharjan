import MyCarousel from "../../slider/MyCarousel";

import "./Home.css";
function Home() {
  return (
    <>
      <div className="  mx-auto w-[1280px] py-4 border ">
        <div>
          <MyCarousel />
        </div>
        <div className="bg-gray-200 min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">Welcome to Your Home</h1>
            <p className="text-lg mb-6">
              Feel free to explore and make yourself at home!
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
