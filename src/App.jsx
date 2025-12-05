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
import RectangleBox from "./rectangle-box/rectangle-box-component";
import Mycomponent from "./Galance/galance-component";
import ContactSection from "./Contact/ContactSection";
import OurPromise from "./OurPromise/OurPromise";
function App() {
  return (
    <>
      <RectangleBox />
      <Mycomponent/>
      <OurPromise />
       <ContactSection />
    
    </>
  );
}

export default App;