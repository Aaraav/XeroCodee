import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth <= 1000); // Adjust the threshold according to your design
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const show = () => {
    setIsMobile((prev) => !prev);
  };

  return (
    <div id="navbar" className="flex justify-between ml-[5%] mt-[20px]">
      <img className="ml-[30px] w-12" src="./Logo.png" />

      {!isMobile && (
        <ul className="flex bg-[#F7F7FD] w-[550px] justify-between ml-[10%]  align-middle rounded-3xl">
          <li className="m-[10px] text-[#3D3D3D] font-semibold hover:text-[#3056d3] transition ease-in">
            Home
          </li>
          <li className="m-[10px] text-[#3D3D3D] font-semibold hover:text-[#3056d3] transition ease-in">
            About us
          </li>
          <li className="m-[10px] text-[#3D3D3D] font-semibold hover:text-[#3056d3] transition ease-in">
            Services
          </li>
          <li className="m-[10px] text-[#3D3D3D] font-semibold hover:text-[#3056d3] transition ease-in">
            Contact Us
          </li>
        </ul>
      )}

      <div id="lastdiv-navbar" className="flex ml-[5%]">
        <img src="Dropdown_button.png" />
        <button className="bg-[#3171DE] w-[150px] h-[40px] text-center rounded-xl text-white mr-[40px] hover:bg-violet-950 hover:transition-colors">
          Schedule a call
        </button>
      </div>

      <button id="menu" onClick={show}>
        <img
          className="w-[20px] absolute z-[100] ml-[20px] mr-10 md:hidden"
          src="./menu.png"
        />
      </button>
    </div>
  );
}
