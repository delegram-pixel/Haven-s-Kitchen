
import images from '../../constants/images';
import "./Header.css";
import SubHeading from '../../components/SubHeading/SubHeading';


const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
    <SubHeading title="Chase the new flavour" />
    <h1 className="app__header-h1"> The Key to Fine Dining</h1>
    <p className="p__opensans" style={{margin:'2rem 0', fontSize:'14px'}}>     Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. </p>
    <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
  <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
