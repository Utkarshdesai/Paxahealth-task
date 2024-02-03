import React from 'react'
import { Cardtag } from '../Cardtag'
import { Textcard } from '../common/Textcard'
import { ImageCard } from '../common/ImageCard'
import rectansgle2 from '../../images/Rectangle (2).png'
import rectansgle1 from '../../images/Rectangle (1).png'


export const Card2 = () => {
  return (
    <div className='flex flex-col w-[362px] h-[1036px] ml-[30px] gap-y-1'>

        <Cardtag text={'Protip'}> </Cardtag>
        <Textcard 
          heading={'Home business advertising ideas'}
          subheading={'Successful businesses know the importance of building and maintaining good working.'}
          like={'76'}
          comment={'75'}
          sharelink={'12'}
          
        />
        <ImageCard 
          heading={'Unmatched toner cartridge quality 20 less than oem price'}
          subheading={'Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.'}
          like={'76'}
          comment={'32'}
          sharelink={'66'}
          picture={rectansgle2}
        />

        <ImageCard 
          heading={'How to look up'}
          subheading={'Are you considering buying a compatible inkjet cartridge for your printer?'}
          like={'54'}
          comment={'76'}
          sharelink={'11'}
          picture={rectansgle1}
        />



    </div>
  )
}
