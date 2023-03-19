import React from 'react'
import photo1 from '../assets/photo-1.jpg'
import photo2 from '../assets/photo-2.jpg'
import photo3 from '../assets/photo-3.jpg'
import photo4 from '../assets/photo-4.jpg'
import photo5 from '../assets/photo-5.jpg'
import photo6 from '../assets/photo-6.jpg'
import photo7 from '../assets/photo-7.jpg'
import photo8 from '../assets/photo-8.jpg'
import photo9 from '../assets/photo-9.jpg'
import photo10 from '../assets/photo-10.jpg'

import photo11 from '../assets/photo-11.jpg'
import photo12 from '../assets/photo-12.jpg'
import photo13 from '../assets/photo-13.jpg'
import photo14 from '../assets/photo-14.jpg'
import photo15 from '../assets/photo-15.jpg'
import photo16 from '../assets/photo-16.jpg'
import photo17 from '../assets/photo-17.jpg'
import photo18 from '../assets/photo-18.jpg'
import photo19 from '../assets/photo-19.jpg'
import photo20 from '../assets/photo-20.jpg'

import photo21 from '../assets/photo-21.jpg'
import photo22 from '../assets/photo-22.jpg'
import photo23 from '../assets/photo-23.jpg'
import photo24 from '../assets/photo-24.jpg'
import photo25 from '../assets/photo-25.jpg'
import photo26 from '../assets/photo-26.jpg'
import photo27 from '../assets/photo-27.jpg'
import photo28 from '../assets/photo-28.jpg'
import photo29 from '../assets/photo-29.jpg'

import { LazyLoadImage } from "react-lazy-load-image-component";


const media = () => {
  return (
    <div className="grid p-4 sm:p-0 sm:flex sm:mx-40 gap-10 sm:mt-10">
      <div className="flex flex-col flex-wrap gap-10">        
        <LazyLoadImage src={photo11}   alt="Image Alt" />
        <LazyLoadImage src={photo12}   alt="Image Alt"/>
        <LazyLoadImage src={photo13}   alt="Image Alt"/>
        <LazyLoadImage src={photo14}   alt="Image Alt"/>
        <LazyLoadImage src={photo15}   alt="Image Alt"/>
        <LazyLoadImage src={photo16}   alt="Image Alt"/>
        <LazyLoadImage src={photo17}   alt="Image Alt"/>
        <LazyLoadImage src={photo18}   alt="Image Alt"/>
        <LazyLoadImage src={photo19}   alt="Image Alt" />
      </div>
      
      <div className="flex flex-col flex-wrap gap-10">
        <LazyLoadImage src={photo21}   alt="Image Alt" />
        <LazyLoadImage src={photo22}   alt="Image Alt"/>
        <LazyLoadImage src={photo23}   alt="Image Alt"/>
        <LazyLoadImage src={photo24}   alt="Image Alt"/>
        <LazyLoadImage src={photo25}   alt="Image Alt"/>
        <LazyLoadImage src={photo26}   alt="Image Alt"/>
        <LazyLoadImage src={photo27}   alt="Image Alt"/>
        <LazyLoadImage src={photo8}   alt="Image Alt"/>
      </div>

      <div className="flex flex-col flex-wrap gap-10">
        <LazyLoadImage src={photo1}   alt="Image Alt" />
        <LazyLoadImage src={photo10}   alt="Image Alt"/>
        <LazyLoadImage src={photo3}   alt="Image Alt"/>
        <LazyLoadImage src={photo4}   alt="Image Alt"/>
        <LazyLoadImage src={photo5}   alt="Image Alt"/>
        <LazyLoadImage src={photo6}   alt="Image Alt"/>
        <LazyLoadImage src={photo7}   alt="Image Alt"/>
        <LazyLoadImage src={photo28}   alt="Image Alt"/>
        <LazyLoadImage src={photo9}   alt="Image Alt" />
        <LazyLoadImage src={photo20}   alt="Image Alt" />
      </div>
      
    </div>

  )
}

export default media
