import React from 'react'
import { Cardtag } from '../Cardtag' 
import { Textcard } from '../common/Textcard'
import { ImageCard } from '../common/ImageCard'
import rectanle3 from '../../images/Rectangle (3).png'

export const Card4 = () => {
  return (
    <div className='flex flex-col w-[362px] h-[977px] ml-[30px] gap-y-1'>

     <Cardtag text={'Test'}> </Cardtag>
        <Textcard 
          heading={'Linux or windows which is it'}
          subheading={'Saving money – is something we would all like.'}
          like={'32'}
          comment={'87'}
          sharelink={'31'}
          
        /> 

        <ImageCard 
          heading={'Be single minded'}
          subheading={'Create a list with all possible keywords that fit to your product, service or business field.'}
          like={'21'}
          comment={'34'}
          sharelink={'17'}
          picture={rectanle3}
        /> 

        <Textcard 
          heading={'Linux or windows which is it'}
          subheading={'Saving money – is something we would all like.'}
          like={'55'}
          comment={'23'}
          sharelink={'19'}
          
        /> 

        <Textcard 
          heading={'Dna the future of nutrition'}
          subheading={'“Why does anyone want a vasectomy reversal?” This is a question I hear any time I tell someone what I do for a living.'}
          like={'12'}
          comment={'33'}
          sharelink={'66'}
          
        />


    </div>
  )
}
