/* eslint-disable react/no-unescaped-entities */
import { FiFacebook, FiInstagram, FiTwitch } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import {images} from "../../constants"
import './Footer.css';
const Footer = () => {
    return ( 
        <div className='app__footer section__padding'>
        <FooterOverlay/>
          <Newsletter/>

          <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className='app__footer-headtext'>Contact Us</h1>
                <p className='p__opensans'>Oron Road, Uyo</p>
                <p className='p__opensans'>+234 80000000</p>
                <p className='p__opensans'>+234 80000000</p>
            </div>
            <div className="app__footer-links_logo">
            <h1 className='app__footer-headtext'>HAVEN</h1>
                {/* <img src={images.gericht} alt="footer_logo" /> */}
                <p className='p__opensans'>The best way to find your serve is to lose yourself in service.</p>
           <img src={images.spoon} alt="spoon" className='spoon_img' style={{marginTop:15}} />
            <div className="app__footer-links_icons">
                <FiFacebook/>
                <FiTwitch/>
                <FiInstagram/>
            </div>
            
            </div>
            <div className="app__footer-links_work">
            <h1 className='app__footer-headtext'>Working Hours</h1>
                <p className='p__opensans'>MOnday - Friday</p>
                <p className='p__opensans'>07:00am - 10:00pm</p>
                <p className='p__opensans'>Saturday - Sunday</p>
                <p className='p__opensans'>07:00am - 10:00pm</p>
           
            </div>
          </div>

          <div className="footer__copyright">
            <p className='p__opensans'>2024 Haven's. All Rights Reserved.</p>
          </div>
        </div>
     );
}
 
export default Footer; 