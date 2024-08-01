/* eslint-disable react/no-unescaped-entities */

import images from '../../constants/images';
import "./Header.css";
import SubHeading from '../../components/SubHeading/SubHeading';


const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
    <SubHeading title="Chase the new flavour" />
    <h1 className="app__header-h1"> The Key to Fine Dining</h1>
    <p className="p__opensans text-justify" style={{margin:'2rem 0', fontSize:'14px'}}>    Discover the rich and vibrant flavors of Nigeria at Haven's Kitchen. Our restaurant is dedicated to bringing you the very best of Nigerian culinary traditions, using fresh, locally-sourced ingredients and time-honored recipes passed down through generations.

Join us for a culinary adventure that celebrates the diverse tastes of Nigeria. From special white-soup and afang soup to delicious Fisherman and rich native soup, every dish is crafted with care to deliver an authentic taste of home.

Come and taste the tradition. Book your table today and let us treat you to a truly unforgettable dining experience. </p>
    <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
  <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
