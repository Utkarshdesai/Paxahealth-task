import React from 'react'
import { Cardtag } from './Cardtag'
import { Textcard } from './common/Textcard'
import { ImageCard } from './common/ImageCard'
import { Addcard } from './common/Addcard'
import photo from '../images/Photo.png'

export const Card1 = () => {


  return (
    <div className='flex flex-col w-[362px] h-[938px] ml-[30px] gap-y-2 max-[320px] : mb-2'>

     <Cardtag text={'Design'}></Cardtag>
     <Textcard 
       heading={'Old fashioned recipe for preventing allergies and chemical sensitivities'}
       like={'34'}
       comment={'14'}
       sharelink={'34'}
       
     />
     <ImageCard 
       heading={'Cosmetic surgery abroad making the right choice'}
       like={'54'}
       comment={'16'}
       sharelink={'33'}
       picture={photo}
     />

     <Addcard/>

    </div>
  )
}
