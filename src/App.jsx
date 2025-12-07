/*import "./App.css";
import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";

function App() {
  return (
    <div>
      {<HelloWorldComponent /> }
      {<FlexBoxComponent /> }
      <LeadersTomorrowComponent />
      
    </div>
  );
}

export default App;

*/

import React from "react";
// import FlexBoxComponent from "./flex/flex-box-component";
//import FlexWrapComponent from "./flex-wrap/flex-wrap-component";
import RectangleBox from "./rectangle-box/rectangle-box-component";
import Mycomponent from "./Galance/galance-component";
import ContactSection from "./Contact/ContactSection";
import OurPromisesComponent from "./our-promises/our-promises";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
//import College from "./college/college-compoent.jx";
import College from "./college/college-component.jsx";
function App() {
  return (
    <>
      <RectangleBox />
      <Mycomponent/>
     <OurPromisesComponent />
       <ContactSection />
        <College/>
        {/* <FlexBoxComponent /> */}
 <TrustedbyComponent />
         {/* <FlexWrapComponent /> */}
     
    
    </>
  );
}

export default App;


