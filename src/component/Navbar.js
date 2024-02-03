import React from 'react'
import logo from '../logo/Logo.svg'
import board from '../logo/Shape (6).svg'
import shape1 from '../logo/alert-circle-outline.svg'
import shape2 from '../logo/bell-outline.svg'
import shape3 from '../logo/plus-circle-outline.svg'
import user from '../logo/User (1).svg'
export const Navbar = () => {
  return (
    <div className='w-[1920] h-[58px] flex flex-col '>

      <div className='w-full flex flex-row  '>
        <div className='w-[75.83] h-[30px] mt-[13px] ml-[30.08px]'> 
           <img 
             src= {logo}
             alt='logo'
           
           />
        </div> 

         <div className='w-[1px] h-[32px] ml-[21px] mt-[13px] bg-[#000000] opacity-10'> 

         </div>  

        {/* shapes */}
         <div className='w-[24px] h-[24px] ml-[30px] p-[4px] bg-[#F4F4F4] flex flex-row  mt-[14px] gap-1'> 
           
            <div className='w-[7.32px] h-[10.5px] bg-[#000000] opacity-20 mt-[8px]  '> </div>
            <div className='w-[7.32px] h-[16.5px] bg-[#000000] opacity-20 mt-[2px] '> </div>
         </div> 

         <div className='w-[56px] h-[24px] mt-[15px] ml-[5px] '>

            <p className='font-Poppins leading-6 text-base font-semibold'> Boards</p>
         </div> 

         <div className='w-[1px] h-[32px] ml-[] mt-[] bg-black-10'>
            
         </div> 

          <div className='w-[512px] h-[30px] mt-[14px] items-center bg-[#F4F4F4] rounded-md ml-[21px] ' >
            
            <div className='w-[15.16px] h-[15.16px] ml-[482px] mt-[7px] mr-[7px]'>
            <img 
              src= {board}
              alt='searchicon'
               
            /> 
            </div>
            
          </div> 

          <div className='w-[120px] h-[20px] flex item-center mt-[19px] ml-[1000px] '> 
           
            <div className='w-[20px] h-[20px] mr-[30px]'> 
              <img 
               src={shape1}
               alt='add'
              />
            </div> 

            <div className='w-[20px] h-[20px] mr-[30px]'> 
              <img 
               src={shape2}
               alt='add'
              />
            </div> 

            <div className='w-[20px] h-[20px] '> 
              <img 
               src={shape3}
               alt='add'
              />
            </div>
            
          </div>  

          <div className='w-[40px] h-[40px] mt-[12px] ml-[30px] '>
             <img
              src={user}
             />
          </div>
        </div>

        <div className='w-[1920px] h-[1px] mt-[15px] bg-[#000000] opacity-10'>

        </div>




    </div>

  )
}
