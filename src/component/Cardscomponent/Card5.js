import React from 'react'
import { Cardtag } from '../Cardtag'
import { Textcard } from '../common/Textcard'
import { ImageCard } from '../common/ImageCard'
import rectanle4 from '../../images/Rectangle (4).png'

export const Card5 = () => {
  return (
    <div className='flex flex-col w-[362px] h-[928px] ml-[30px] gap-y-1'>

    <Cardtag text={'final'}> </Cardtag>

        <Textcard 
          heading={'At home treatments for beauty on a budget'}
          subheading={'The holidays bring with them thoughts of carving and serving delicious turkey dinners to your family and friends. Tradition has its fans, but perhaps this year you d like to try a twist to your turkey recipe.'}
          like={'87'}
          comment={'54'}
          sharelink={'32'}
          
        /> 

        <Textcard 
          heading={'Home business advertising ideas'}
          subheading={'Successful businesses know the importance of building and maintaining good working.'}
          like={'13'}
          comment={'11'}
          sharelink={'43'}
          
        />  

        <ImageCard 
          heading={'Successful businesses know the importance of building and maintaining good working.'}
          subheading={'With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users.'}
          like={'21'}
          comment={'23'}
          sharelink={'12'}
          picture={rectanle4}
        /> 


    </div>
  )
}
