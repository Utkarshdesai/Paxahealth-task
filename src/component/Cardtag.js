import React from 'react'
import cobmineshape from '../logo/Combined Shape.svg'

export const Cardtag = ({text}) => {
  return (
    <div className='w-[362px] h-[50px] flex flex-row justify-between bg-[#F4F4F4] items-center rounded-md max-[320px]:w-[288px]'>
        
      <div className='w-[56px] h-[24px] pl-[20px]'> 
       <p className='font-Poppins text-md leading-6 font-semibold max-[320px]:leading:5 max-[320px]:text-sm'> {text} </p> 
      </div> 
     
        <div className='h-[6px] flex flex-row pr-[20px]'>
            <div className='w-[6px] h-[6px] rounded-full bg-[#CDCCCA] mr-[3px]'> </div>
            <div className='w-[6px] h-[6px] rounded-full bg-[#CDCCCA] mr-[3px]'> </div>
            <div className='w-[6px] h-[6px] rounded-full bg-[#CDCCCA] '> </div>
        </div>
        
     





    </div>
  )
}
