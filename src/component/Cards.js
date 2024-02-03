import React from 'react'
import { Card1 } from './Card1'
import { Card2 } from '../component/Cardscomponent/Card2'
import { Card3 } from '../component/Cardscomponent/Card3'
import { Card4 } from '../component/Cardscomponent/Card4'
import { Card5 } from '../component/Cardscomponent/Card5'
export const Cards = () => {
  return (
    <div className='grid grid-cols-5 sm:grid-cols-5 max-[540px]:grid-cols-1 max:[640px]: mx-auto'>
     
     <Card1></Card1>
     <Card2></Card2> 
     <Card3></Card3> 
     <Card4></Card4>
     <Card5></Card5>



    </div>
  )
}
