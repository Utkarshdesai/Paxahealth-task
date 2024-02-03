import React from 'react'
import photo from '../../images/Photo.png'
import heart from '../../logo/Heart.svg'
import msg from '../../logo/message-square-outline (1).svg'
import share from '../../logo/attach-outline.svg'
import { Likeposts } from './Likeposts'



export const ImageCard = ({heading , subheading , like ,comment, sharelink, picture , }) => {
  return (
    <div className='w-[362px] bg-[#F4F4F4] p-[20px] rounded-md flex flex-col max-[320px]:w-[288px] max-[320px]:h-[382px]  '>
         
         <div className='w-[322px] h-[170px] max-[320px]:w-[97%] '>
            <img 
            src={picture}
            className='m-[320px]:w-full h-auto'
            />
         </div> 


         <div className='flex flex-row'>
            <div className={`w-[60px] h-[8px] mt-[16px] mr-[8px] rounded-sm bg-[#0AAAF4]`}> </div>
            <div className={`w-[60px] h-[8px] mt-[16px] mr-[8px] rounded-sm bg-[#F8BD1C]`}> </div>
         </div>
       

        <div className='mt-[9px]'>
          <h1 className='font-Poppins leading-5 text  text-[#000000]'> {heading} </h1>
       </div> 

       <div className='mt-[5px]' >
          {
           subheading?.length > 0  && (<p className='text-[#000000] opacity-40 font-Poppins leading-4 text-sm'> {subheading} </p>)
         } 
       </div> 


    <div className='flex flex-row mt-[29px] justify-between'>
         
         <div >
          <Likeposts/>
        </div>    
        
        <div className='flex flex-row items-center gap-2'>
             
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
