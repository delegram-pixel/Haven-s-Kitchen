/* eslint-disable react/no-unescaped-entities */
// import images from "../../constants/images";
import data from "../../constants/data";
import { SubHeading, MenuItem } from "../../components";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading"></p>
        <div className="app__specialMenu-menu__menu_items">
        {data.wines.map((wine,index) =>(
          <MenuItem key={wine.title + index } title={wine.title} price={wine.price} tags={wine.tags}/>
      
        )

        )}

        </div>
      </div>

       
       


    </div>

    <div style={{marginTop:'15px'}}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;