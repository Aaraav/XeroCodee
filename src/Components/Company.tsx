export default function Company() {


  return (
    <div id='companydiv' className='w-[95vw] ml-[2.5vw] h-[80vh] bg-[#f7f7fd] relative mt-[45%] '>
        <img id='image' className='ml-[3%] absolute left-10 top-5 ' src='./Vector 6 (1).png'/>
        <h1 className='text-[#3d3d3d] text-3xl pt-16 font-[bold-400]'>Trusted by Leading Organizations</h1>
        <p className='text-[#3d3d3d] mt-6 font-semibold'>Our 4,000+ teams has expertise in almost<br/> every programming language</p>
         
         <div id='techgiants' className='flex  mt-[5%] justify-between'>
            <img className='w-[4%] h-[3%]' src='./Vector (9).png'/>
            <img className='w-[12%] h-[10%]' src='./logos_microsoft.png'/>
            <img className='w-[12%] h-[10%]' src='./logos_google.png'/>
            <img className='w-[12%] h-[10%]' src='./Vector (10).png'/>
            <img className='w-[8%] h-[6%]' src='./Vector (11).png'/>
            <img className='w-[4%] h-[3%]' src='./Vector (12).png'/>
         </div>

         <button className='w-[16%] border p-2 rounded-3xl text-sm bg-[#3171de] text-white mt-12 hover:bg-violet-950 hover:transition-colors'>Our full Repertorie</button>
      
    </div>
  )
}
