import React from 'react'
import oval2 from '../../logo/Oval (2).svg'
import oval3 from '../../logo/Oval (3).svg'
import oval4 from '../../logo/Oval (4).svg'

export const Likeposts = () => {
  return (
    <div>
          <div className='w-max-content h-[30px] flex flex-row relative  '>

                <div className='w-[30px] h-[30px] absolute  '> 
                <img 
                src={oval2}  
                />
                </div> 

                <div className='w-[30px] h-[30px] absolute  left-[15px] '> 
                <img 
                 src={oval3}  
                />
                </div> 

                <div className='w-[30px] h-[30px]  absolute left-[30px] '> 
                <img 
                src={oval4}  
                />
                </div>  

                <div className='w-[30px] h-[30px] rounded-full bg-[#000000] absolute flex flex-row items-center justify-center left-[45px]'> 
                    <p className='text-[#FFFFFF] font-Poopins text-sm top-[50%]'> + </p> 
                </div>



           </div> 

        
    </div>
  )
}
