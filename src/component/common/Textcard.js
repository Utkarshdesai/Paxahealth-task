import React from 'react'
import heart from '../../logo/heart-outline.svg'
 import msg from '../../logo/message-square-outline (1).svg'
import share from '../../logo/attach-outline.svg'
import { Likeposts } from './Likeposts'

export const Textcard = ({heading , subheading , like ,comment, sharelink  }) => {
  return (
    <div className='w-[362px] max-h-max flex-col p-[20px] bg-[#F4F4F4] rounded-md pr-[20px] max-[320px]:w-[288px]'>

         <div className='flex flex-row'>
            <div className={`w-[60px] h-[8px] mr-[8px] rounded-sm bg-[#0AAAF4]`}> </div>
          
         </div>

       <div>
          <h1 className='font-Poppins leading-5 text-md mt-[9px] text-[#000000]'> {heading} </h1>
       </div> 

       <div className='mt-[10px] '>
          {
           subheading?.length > 0  && (<p className='text-[#000000] opacity-40 font-Poppins leading-4 text-sm'> {subheading} </p>)
         }
       </div> 

       <div className='flex flex-row justify-between mt-[36px]'>
          
          <Likeposts/>

           <div className='flex flex-row  items-center gap-2'>
             
               <div className='flex flex-row justify-evenly items-center gap-2'>
                <p className='font-Poppins leading-3 text-sm opacity-20' > {like} </p> 
                <img 
                 src={heart}
                />
               </div> 

               <div className='flex flex-row justify-evenly items-center gap-1'>
                <p className='font-Poppins leading-3 text-sm  opacity-20'> {comment} </p> 
                <img 
                src={msg}
                />
               </div> 

               <div className='flex flex-row justify-evenly items-center gap-1'>
                <p className='font-Poppins leading-3 text-sm  opacity-20'> {sharelink} </p> 
                <img 
                 src={share}
                />
               </div>
           </div>

       </div>

    </div>
  )
}
