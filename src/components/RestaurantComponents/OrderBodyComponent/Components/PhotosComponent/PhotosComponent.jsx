import {useState} from 'react'

import RedButton from '../../../../../utils/Buttons/RedButton/RedButton'
import WhiteButton from '../../../../../utils/Buttons/WhiteButton/WhiteButton'

import GalleryImgCard from '../../../../../utils/Cards/RestaurantHeroCards/GalleryImgCard/GalleryImgCard'

import biryaniImg from '/images/fortheloveofbiryani.jpg'

import css from './PhotosComponent.module.css'

const PhotosComponent = () => {

  const allPhotosData = [
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
  ]

  const foodPhotosData = [
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    }
  ]

  const ambeiencePhotosData = [
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    },
    {
      imgSrc: biryaniImg
    }
  ]

  const [state, setState] = useState(allPhotosData)

  return <div className={css.outerDiv}>
    <div className={css.ttl}>Krupa Mess & Tiffins Photos</div>
    <div className={css.btns}>
      <RedButton txt="All" count={23} onClick={() => setState(allPhotosData)} />
      <WhiteButton txt="Food" count={17} onClick={() => setState(foodPhotosData)} />
      <WhiteButton txt="Ambience" count={6} onClick={() => setState(ambeiencePhotosData)} />
    </div>
    <div className={css.photoCards}>
      {state?.map((item, id) => {
        return <div key={id} className={css.imgCard}>
          <GalleryImgCard imgSrc={item.imgSrc} />
        </div>
      })}
    </div>
  </div>
}

export default PhotosComponent