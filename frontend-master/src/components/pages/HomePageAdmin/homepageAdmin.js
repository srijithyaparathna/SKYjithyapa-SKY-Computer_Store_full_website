import "./HomepageAdmin.css";

import Header from "../../Header/Header";
import Footer from "../../footer/Footer";
import Body from "../../body/Body";
import Sidebar from "../../sidebar/Sidebar";
import card from "../../card/card";
export default function homepageAdmin() {
  return (
    <div>
      {/* <Header /> */}
      <div className="content-container">
        {/* <Sidebar /> */}
        <div className="bodyclass">
          
          <Body/>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
