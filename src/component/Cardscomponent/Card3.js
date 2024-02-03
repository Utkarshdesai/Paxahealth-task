import React from 'react'
import { Cardtag } from '../Cardtag'
import { Addcard } from '../common/Addcard'
import { Textcard } from '../common/Textcard'
import { ImageCard } from '../common/ImageCard'
import rectangle from '../../images/Rectangle.png'

export const Card3 = () => {
  return (
    <div className='flex flex-col w-[362px] h-[805px] ml-[30px] gap-y-1'>

     <Cardtag text={'Trello'}> </Cardtag>
     
        <ImageCard 
          heading={'Types of paper in catalog printing'}
          subheading={'Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).'}
          like={'34'}
          comment={'23'}
          sharelink={'98'}
          picture={ rectangle}
          

        /> 

        <Textcard 
          heading={'There is no competition'}
          subheading={'This article is floated online with an aim to help you find the best dvd printing solution.'}
          like={'23'}
          comment={'12'}
          sharelink={'44'}
          
        /> 

       <Addcard/>




    </div>
  )
}
