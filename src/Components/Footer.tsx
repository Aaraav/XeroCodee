
export default function Footer() {
  return (
    <>
    <div id='footer' className='h-[80vh]'>
        <div className='flex'>
<table className='ml-[20%] mt-[10%] font-semibold '>
    <thead>
        <th className='text-[12px]'>Product</th>
        <th className='text-[12px]'>Information</th>
        <th className='text-[12px]'>Company</th>
    </thead>

    <td style={{ padding: '0 40px' }}>
        <tr className='text-[9px]'>Employee database</tr>
        <tr className='text-[9px]'>Payroll</tr>
        <tr className='text-[9px]'>Absences</tr>
        <tr className='text-[9px]'>Time tracking</tr>
        <tr className='text-[9px]'>Shift planner</tr>
        <tr className='text-[9px]'>Recruiting</tr>
    </td>
    <td style={{ padding: '0 40px' }}>
        <tr className='text-[9px]'>FAQ</tr>
        <tr className='text-[9px]'>Blog</tr>
        <tr className='text-[9px]'>Support</tr>
       
    </td>
    <td style={{ padding: '0 40px' }}>
        <tr className='text-[9px]'>About us</tr>
        <tr className='text-[9px]'>Careers</tr>
        <tr className='text-[9px]'>Contact us</tr>
        <tr className='text-[9px]'>Lift media</tr>
       
    </td>

    </table>

    <div id='form' className='w-[20%] h-[37vh] text-left pl-[30px] rounded-xl bg-[#f4f5f9] border mt-[7%] ml-[20%]'>
<h4 className='font-semibold text-[#3d3d3d] mt-8'>Subscribe</h4>
<img className='w-[36px] h-[36px] absolute ml-[11%] mt-5' src='./Fill.png'/>
<input className='w-[80%] h-[35px] mt-[10%] rounded-2xl text-[#3d3d3d] text-[10px] pl-4' type='email' placeholder='Email address'></input>
<p className='text-[8px] mr-4 mt-4 text-[#3d3d3d]'>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>


    </div>

    </div>
    <div className='lastfooter'>
     <hr className='w-[80%] ml-[10%] mt-[3%] border'/>
     <div className='flex justify-between mt-[10px] '>
       <img className='ml-[10%] w-12' src='./Logo.png'/>
        

       <ul className='flex  bg-[#F7F7FD] w-[170px] mr-[40%] justify-between align-middle rounded-3xl'>
        <li className='m-[4px] text-[#3D3D3D] text-[12px] font-semibold '>Terms</li>
        <li className='m-[4px] text-[#3D3D3D] text-[12px] font-semibold '>Privacy</li>
        <li className='m-[4px] text-[#3D3D3D] text-[12px] font-semibold ' >cookies</li>
       </ul>

       </div>




    </div>
    </div>
     
     
     </>
  )
}
