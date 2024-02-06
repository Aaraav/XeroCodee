import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
type CardProps = {
  img: string;
  heading: string;
  x: string;
};
gsap.registerPlugin(ScrollTrigger);


const Card: React.FC<CardProps & { noBorder?: boolean }> = ({ img, heading, x, noBorder }) => {
  const cardClass = `w-[30%] h-[37vh] text-left pl-[30px] ${noBorder ? '' : ' border-l border-r border-b shadow-xl rounded-2xl'} bg-white`;

  return (
    <div id='cards' className={cardClass}>
      <img src={img} alt="Card Image" className='m-5' />
      <h2 className='text-[#4962e6] font-semibold text-2xl'>{heading}</h2>
      <p className='text-[#3d3d3d] text-[10px] text-left mt-4 font-bold'>
        {x}
      </p>
    </div>
  );
};

export default function Tech() {
  if (window.innerWidth >= 1000) {
  useEffect(() => {
    const techdiv = document.querySelector('#Techdiv');
    const seconddiv = document.querySelector('#seconddiv');
  
    gsap.fromTo(
      techdiv,
      {
       
        opacity: 0,
        y:100
      },
      {
        y:60,
        opacity: 1,
        scrollTrigger: {
          trigger: techdiv,
          start: 'top 60%',
          end: 'top 20%',
        },
      }
    );
    gsap.fromTo(
      seconddiv,
      {
       
        opacity: 0,
        y:60
      },
      {
        y:30,
        opacity: 1,
        scrollTrigger: {
          trigger: techdiv,
          start: 'top 80%',
          end: 'top 20%',
        },
      }
    );
    

  }, []);

}
  return (
    <div id='Techdiv'>
      <h1 className='mt-[9%] text-2xl font-semibold text-[#3d3d3d]'>
        We have multidisciplinary teams to meet any <span className='text-[#4962e6]'>challenge</span>
      </h1>
      <div id='carddiv' className='flex justify-between w-[80vw] ml-[10vw] mb-[10vh] mt-[4vh] p-[30px] border-r border-l border-b shadow-xl rounded-2xl'>
        <Card img='./monitor.png' heading='Front-end' x={`Our Frontend developers understand the  difference between aesthetics and functionality`} noBorder />
        <Card img='./simcard.png' heading='Back-end' x={`Our Backend developers are the architects of security and efficiency. They design and build Databases and APIs`} noBorder />
        <Card img='./driver.png' heading='Data Analysts' x={`Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts`} noBorder />
      </div>

      <img className='w-[5%] absolute ml-[29%] mt-8' src='./Vector 6.png' alt="Vector" />

      <h1 id='Techtext' className='mt-[9%] text-2xl font-semibold text-[#3d3d3d]'>
        Empowering Your Digital Vision: Our <br /> Comprehensive Tech Services
      </h1>

      
        <img className='absolute mt-[13%] ml-[56%] w-[10%]' src='./Vector 6.png' alt="Vector" />
         <img className='absolute mt-[20%] ml-[32%] w-[10%]' src='./Vector 6 (1).png'/>
      

         <div id='seconddiv' className='flex flex-wrap w-[90vw] h-[100vh] ml-[5vw] justify-between mt-0 absolute  '>
        <Card  img='document-code.png' heading='Custom Software Development' x='Create custom software tailored for your unique needs, including frontend and core backend technology' />
        <Card img='setting-5.png' heading='QA And Testing' x='Create custom software tailored for your unique needs, including frontend and core backend technology' />
        <Card img='data.png' heading='AI and Data Science' x='Use leading AI, machine learning and data engineering technologies to unlock business values' />
        <Card img='brush.png' heading='UI/UX Design' x='Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users' />
        <Card img='mobile.png' heading='Mobile App Development' x='Build performant, scalable and secure mobile applications for iOS and Android devices' />
        <Card img='shapes.png' heading='Platform and infrastructure' x='Ensure applications are secure, fault-tolerant and highly available with our DevOps and Security engineer' />
      </div>
    </div>
  );
}
