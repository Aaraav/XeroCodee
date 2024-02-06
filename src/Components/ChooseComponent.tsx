import React,{useState} from 'react'
type CardProps = {
    
    heading: string;
    x: string;
    style:React.CSSProperties;
  };
  const Card: React.FC<CardProps> = ({ heading, x,style}) => {
    const cardClass = `w-[33%] h-[37vh] text-left pl-[30px] ml-[10px] mr-[10px] border rounded-2xl`;
  
    return (
      <div id='cards' className={cardClass} style={style}>
        <h2 className='text-[#3d3d3d] font-semibold text-xl '>{heading}</h2>
        <p className='text-[#3d3d3d] text-[10px] text-left mt-4 font-bold'>
          {x}
        </p>
      </div>
    );
  };
function ChooseComponent() {
const cardsData=[
{
  heading:'Expertise Across the Tech Spectrum', x:'Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.'
},
{
  heading:'Proven Track Record of Success:' ,x:'Our portfolio is a testament to our ability to deliver impactful results.'
},{
  heading:'Collaborative Approach, Transparent Communication:', x:'We believe in working hand-in-hand with our clients.'
},
{
  heading:'Tailored Solutions for Your Unique Needs:', x:'Tailored Solutions for Your Unique Needs:'
},


]


  const [currentIndex, setCurrentIndex] = useState(0);

 
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    console.log(currentIndex)
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 ) % cardsData.length);
  };
  return (
    <>
    <div id='choose' className='w-[95vw] ml-[2.5vw] h-auto bg-[#f7f7fd] relative '>
    <h1 className='text-[#3d3d3d] text-3xl pt-16 font-[bold-400]'>Choose Us: Your Path to Innovation and<br/> <span className='text-[#59b1ee]'> Success</span></h1>
    <div id='cardsdiv'>
    <div id='cardchoose'  className='flex justify-between w-[80vw] ml-[10vw] mb-[10vh] mt-[4vh] p-[30px] '>
    {cardsData.map((card, index) => (
          <Card key={index} heading={card.heading} x={card.x}  style={{
            transform: `translateX(${(index - currentIndex) * 20}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}/>
        ))}
      </div>
      </div>
      <div className=''>
        <button id='btnnew' onClick={handlePrev}><img src='Frame 43857.png'/></button>   
        <button id='btnnew' onClick={handleNext} ><img src='Frame 43858.png'/></button>   
        </div>

    </div>

    <div id='employee' className='flex ml-[30%] mt-[5%]'>

      <img className='w-[15%] h-[15%] -mr-9 z-1 ' src='./Image/Frame 3254.png'/>
      <img className='w-[15%] h-[15%] -mr-9' src='./Image/Frame 3254-1.png'/>
      <img className='w-[15%] h-[15%] -mr-9' src='./Image/Organization.png'/>
      <img className='w-[15%] h-[15%] -mr-9' src='./Image/Frame 3254-2.png'/>
      <img className='w-[15%] h-[15%] -mr-9' src='./Image/Frame 3254-3.png'/>

    </div>
    <h1 className='text-[#3d3d3d] text-3xl pt-16 font-[bold-400]'>Let's Form Your Crew.</h1>

    <button  id='choosebtn' className='w-[16%] border p-2 rounded-3xl text-sm bg-[#3171de] text-white mt-12 hover:bg-violet-950 hover:transition-colors'>Schedule a call</button>


   
    </>
  )
}

export default ChooseComponent
