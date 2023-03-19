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

import { LazyLoadImage } from "react-lazy-load-image-component";

const media = () => {
  return (
    <div className="grid sm:flex p-10 sm:p-0  sm:mx-40 gap-10 sm:mt-10">
      <div className="flex flex-col flex-wrap gap-10">        
        <LazyLoadImage src={photo11} alt="photo11" />
        <LazyLoadImage src={photo12} alt="photo12"/>
        <LazyLoadImage src={photo13} alt="photo13"/>
        <LazyLoadImage src={photo14} alt="photo14"/>
        <LazyLoadImage src={photo15} alt="photo15"/>
        <LazyLoadImage src={photo16} alt="photo16"/>
        <LazyLoadImage src={photo17} alt="photo17"/>
        <LazyLoadImage src={photo18} alt="photo18"/>
        <LazyLoadImage src={photo19} alt="photo19" />
      </div>
      
      <div className="flex flex-col flex-wrap gap-10">
        <LazyLoadImage src={photo21} alt="photo21" />
        <LazyLoadImage src={photo22} alt="photo22"/>
        <LazyLoadImage src={photo23} alt="photo23"/>
        <LazyLoadImage src={photo24} alt="photo24"/>
        <LazyLoadImage src={photo25} alt="photo25"/>
        <LazyLoadImage src={photo26} alt="photo26"/>
        <LazyLoadImage src={photo27} alt="photo27"/>
        <LazyLoadImage src={photo8}  alt="photo8"/>
      </div>

      <div className="flex flex-col flex-wrap gap-10">
        <LazyLoadImage src={photo1} alt="photo1" />
        <LazyLoadImage src={photo10} alt="photo10"/>
        <LazyLoadImage src={photo3} alt="photo3"/>
        <LazyLoadImage src={photo4} alt="photo4"/>
        <LazyLoadImage src={photo5} alt="photo5"/>
        <LazyLoadImage src={photo6} alt="photo6"/>
        <LazyLoadImage src={photo7} alt="photo7"/>
        <LazyLoadImage src={photo28} alt="photo28"/>
        <LazyLoadImage src={photo9} alt="photo9" />
        <LazyLoadImage src={photo20} alt="photo20" />
      </div>
      
    </div>

  )
}

export default media
