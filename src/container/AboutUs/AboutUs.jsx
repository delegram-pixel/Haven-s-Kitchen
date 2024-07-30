import "./AboutUs.css";
import images from "../../constants/images";

const AboutUs = () => (
 
 
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id=" "
  >
    <div className="app__aboutus-overlay flex__center">
     <img src={images.G} alt="" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant"> About us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__images" />
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          corporis minus praesentium qui doloremque nobis, omnis quia laudantium
          deleniti facilis impedit quidem voluptas autem eius distinctio
          laboriosam voluptatum est! Aspernatur!
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center"></div>
      <img src={images.knife} alt="about-knife" />
    </div>

     
    <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__images" />
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          corporis minus praesentium qui doloremque nobis, omnis quia laudantium
          deleniti facilis impedit quidem voluptas autem eius distinctio
          laboriosam voluptatum est! Aspernatur!
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

  </div>
);

export default AboutUs;
