import { useEffect } from 'react'
import gsap from 'gsap'

export default function Page0() {

   


    useEffect(()=>{
        

        gsap.fromTo("h1", {
            opacity: 0,
           
           
          }, {
            opacity: 1, 
           
           
          });
        gsap.to('#page0', {
            y: '-100vw',
            delay: 2,
            duration:3,
           
          });
    },[])
  return (
    <div id='page0'  className='absolute z-[1000000000000000] bg-[#3171de] w-[100vw] h-[100vh] top-0 left-0 '>
      <h1 className='text-[100px] text-white mt-[30vh]'>Welcome To XeroCodee!!!</h1>
    </div>
  )
}
