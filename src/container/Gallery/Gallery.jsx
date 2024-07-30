import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import {images} from '../../constants';


import './Gallery.css';

const galleryImages = [images.gallery01, images.ws, images.gallery04, images.afang];

const Gallery = () => {
const scrollRef = React.useRef(null);

const scroll = (direction) =>{
  const { current } = scrollRef;

  if (direction === 'left'){
    current.scrollLeft -= 300;
  }
  else{
    current.scrollLeft +=300;
  }
}

return(  
  
  <div className='app__gallery flex__center' id='gallery'> 
    <div className="app__gallery-content">
      <SubHeading title="Instagram"/>
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: "#AAA", marginTop: '2rem'}}> Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>

            <a href={`Photo`} className='custom__button'>View More</a>

    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
         {galleryImages.map((galleryImages, index) => (
          <div className='app__gallery-images_card flex__center' key={ `gallery_image-${index + 1}`}>
            
            <img src={galleryImages} alt="gallery" />
            <BsInstagram className='gallery__image-icon'/>
          
          </div>

         ))}
      </div>

      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={() =>scroll('left')} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={() =>scroll('right')} />
      </div>
    </div>
  </div>
);
}

export default Gallery;
