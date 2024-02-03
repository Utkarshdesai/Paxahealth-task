import React from 'react'
import shape4 from '../logo/Heart.svg'
import shape5 from '../logo/globe-2-outline.svg'
import shape6 from '../logo/Hard.svg'
import oval1 from '../logo/Oval (1).svg'
import oval2 from  '../logo/Oval Copy 2.svg'
import oval3 from '../logo/Oval Copy 3.svg'
import oval4 from '../logo/Oval Copy 4.svg'
import oval5 from '../logo/Oval Copy.svg'



export const Menubar = () => {
  return (
    <div className='flex flex-row items-center my-[32px] '>

     
          <div className='w-[114px] ml-[30px] '>
                <h1 className='leading-8 font-medium font-Poppins text-lg'> Brackets </h1>
            </div> 
            
    
                      
            <div className='w-[19px] h-[19px] ml-[204] mt-[4px] items-center '>   
              <img 
                src={shape4}
              
              />
            </div>  

            <div className='w-[1px] h-[35px] bg-[#000000] opacity-20 ml-[19px] '>

            </div>

            <div  className='w-[19px] h-[19px] ml-[11px] items-center '>   
              <img 
                src={shape5}
              />
            </div>  

            <div className='w-[54px] h-[27px] ml-[23px] '>
                <p className='text-[#000000] opacity-10 leading-7 font-medium font-Poppins text-md'> Public</p>
            </div>

            <div className='w-[1px] h-[35px] bg-[#000000] opacity-20 ml-[19px] '>

            </div>

            <div  className='w-[19px] h-[19px] items-center ml-[19px]'>   
              <img 
                src={shape6}
              />
            </div> 


     
         
        <div className='w-[140px] h-[40px] flex flex-row  relative ml-[966px] '>

           <div className='w-[40px] h-[40px] absolute  '> 
             <img 
              src={oval1}  
             />
           </div> 

           <div className='w-[40px] h-[40px] absolute  left-[20px] '> 
             <img 
              src={oval5}  
             />
           </div> 

           <div className='w-[40px] h-[40px]  absolute left-[40px] '> 
             <img 
              src={oval2}  
             />
           </div> 

           <div className='w-[40px] h-[40px]  absolute  left-[60px] '> 
             <img 
              src={oval3}  
             />
           </div> 

           <div className='w-[40px] h-[40px]  absolute left-[80px]'> 
             <img 
              src={oval4}  
             />
           </div> 

           <div className='w-[40px] h-[40px] rounded-full bg-[#000000] absolute flex flex-row items-center justify-center left-[100px]'> 
                <p className='text-[#FFFFFF] font-Poopins text-sm top-[50%]'> +44 </p> 
           </div>

           

        </div> 

        <div className='w-[56px] h-[30px] items-center'>
            <p className='font-Poppins leading-7 text-base ml-[200px]'> Menu </p>
        </div> 

        


    </div>
  )
}
