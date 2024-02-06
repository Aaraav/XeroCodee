import React, { useState} from 'react';

type CardProps = {
  heading: string;
  text: string;
  owner: string;
  style:React.CSSProperties;
};

const Cards: React.FC<CardProps> = ({ heading, text, owner, style }) => {
  return (
    <div id='Ratingdiv-cards' className='w-[20vw] m-6 h-[55vh] p-3 bg-white border rounded-xl' style={style} >
      <p className='text-left ml-[10%]'>⭐️⭐️⭐️⭐️⭐️</p>
      <h1 className='font-bold text-[16px]'>{heading}</h1>
      <p className='text-[13px] mt-4 mb-4 text-center'>{text}</p>
      <hr className='font-bold' />
      <p className='text-[10px] font-semibold p-5'>{owner}</p>
    </div>
  );
};

export default function Rating() {
  

  const cardsData = [
    {
      heading: '"Exceptional Solutions, Exceeded Expectations!"',
      text:
        '"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."',
      owner: 'CEO of TechCraft Solutions',
    },
    {
      heading: '"Exceptional Solutions, Exceeded Expectations!"',
      text:
        '"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."',
      owner: 'CEO of TechCraft Solutions',
    },
    {
      heading: '"Exceptional Solutions, Exceeded Expectations!"',
      text:
        '"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."',
      owner: 'CEO of TechCraft Solutions',
    },
    {
      heading: '"Exceptional Solutions, Exceeded Expectations!"',
      text:
        '"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."',
      owner: 'CEO of TechCraft Solutions',
    },
    {
      heading: '"Exceptional Solutions, Exceeded Expectations!"',
      text:
        '"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."',
      owner: 'CEO of TechCraft Solutions',
    },
    {
      heading: '"Exceptional Solutions, Exceeded Expectations!"',
      text:
        '"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."',
      owner: 'CEO of TechCraft Solutions',
    },
    {
      heading: '"Exceptional Solutions, Exceeded Expectations!"',
      text:
        '"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."',
      owner: 'CEO of TechCraft Solutions',
    },
    {
      heading: '"Exceptional Solutions, Exceeded Expectations!"',
      text:
        '"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."',
      owner: 'CEO of TechCraft Solutions',
    },
    {
      heading: '"Exceptional Solutions, Exceeded Expectations!"',
      text:
        '"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."',
      owner: 'CEO of TechCraft Solutions',
    },
    

  ];
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    console.log(currentIndex)
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
  };

  return (
    <div id='Rating' className='w-[100vw] h-[150vh] mt-[3%] '>

      <div id='Ratingdiv' className='flex'>
        <div id='imagediv'>
          <img className='absolute w-[10%] left-[10%] mt-[9%] z-20' src='Vector 6.png' alt='Vector 6' />
          <img className='absolute z-0 w-[35%] left-[20%] mt-[15%] opacity-100' src='Vector 6 (1).png' alt='Vector 6 (1)' />
          <img className='w-[40%] absolute z-10 ml-[10%]' src='./Image/Intersect.png' alt='Intersect' />
        </div>

        <div id='boxdiv' className='ml-[60%] mt-[5%]'>
          <h1 className='text-[#3d3d3d] text-4xl text-left'>We've Stopped Counting.<br /> Over 500 brands count on<br /> us.</h1>
          <p className='text-[#3d3d3d] mt-6 font-semibold text-left'>Our 4,000+ teams have expertise in almost<br /> every programming language</p>
        </div>
      </div>

      <div id='Rating-Cardsdiv' className='absolute z-50 bg-transparent mt-[10%] flex justify-between overflow-hidden'>
        {cardsData.map((card, index) => (
          <Cards key={index} heading={card.heading} text={card.text} owner={card.owner} style={{ transform: `translateX(${(index - currentIndex) * 10}vw)`, transition: 'transform 0.5s ease-in-out' ,marginTrim:'all'}}/>
        ))}
      </div>

      <div className='mt-[40%]'>
        <button id='btn' onClick={handlePrev}><img src='Frame 43857.png' alt='Button 1' /></button>
        <button id='btn' onClick={handleNext}><img src='Frame 43858.png' alt='Button 2' /></button>
      </div>

    </div>
  );
}
