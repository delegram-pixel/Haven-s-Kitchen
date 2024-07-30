/* eslint-disable react/prop-types */

import images from '../../constants/images';
const SubHeading = ({ title }) => (
  <div  style={{marginBottom: '1ren'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
  