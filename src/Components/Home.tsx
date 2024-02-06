import {useEffect}from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  if (window.innerWidth >= 1000) {
    useEffect(() => {
      const shadowdivh1 = document.querySelector('#shadowdiv h2');
      const shadowdivp = document.querySelector('#shadowdiv p');

     
    
      gsap.fromTo(
        shadowdivh1,
        {
        
          opacity: 0,
          y:-10,
         
        },
        {
          y:0,
          opacity: 1,
         
        }
      );
      gsap.fromTo(
        shadowdivp,
        {
         
          opacity: 0,
          y:-10
        },
        {
          y:0,
          opacity: 1,
         
        }
      );

     
      
  
    }, []);
  }
  return (
    <>
      <div id='Home-main' className='flex mt-[20px] w-full h-[80vh] justify-between'>
        <div id='shadowdiv' className='bg-white border-none  ml-4 w-[44vw] h-[92vh] shadow-2xl shadow-slate-700 absolute z-[1] text-left p-16 '>
          <p className='text-[#F3BC4C] text-[12px] font-semibold'>TECH SERVICES</p>
          <h2 className='text-[#3d3d3d] text-5xl mt-6 space-x-10'>TechSynergy:<br/> Innovate,<br/> Create, Elevate </h2>
          <p id='ptag' className='text-[12px] text-[#3d3d3d] font-semibold mt-6'>Unlocking Possibilities, One Code at a Time</p>
          <button className='w-[100px] mt-6 p-[3px] border h-8 bg-[#66b066] text-white text-center rounded-2xl text-[10px] hover:bg-violet-950 hover:transition-colors'>See Projects</button>
        </div>
        <img className='w-[65%]  mr-[3%] ml-[32vw] absolute z-0' src='./Image/pexels-canva-studio-3153201 1.png' />
      </div>
    </>
  );
}
