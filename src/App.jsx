// /*import "./App.css";
// import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";

// function App() {
//   return (
//     <div>
//       {<HelloWorldComponent /> }
//       {<FlexBoxComponent /> }
//       <LeadersTomorrowComponent />
      
//     </div>
//   );
// }

// export default App;

// */

// import React from "react";
// // import FlexBoxComponent from "./flex/flex-box-component";
// //import FlexWrapComponent from "./flex-wrap/flex-wrap-component";
// import RectangleBox from "./rectangle-box/rectangle-box-component";
// import Mycomponent from "./Galance/galance-component";
// import ContactSection from "./Contact/ContactSection";
// import OurPromisesComponent from "./our-promises/our-promises";
// import TrustedbyComponent from "./trusted-by/trusted-by-component";
// //import College from "./college/college-compoent.jx";
// import College from "./college/college-component.jsx";
// import NotFound from "./NotFound";
// import { Routes, Route } from 'react-router-dom';
// // import UsestateformComponent from "./usestate/use-state-component.jsx";   
// import Lms from "./usestate/use-state-component";
// import FetchApiComponent from "./fetch-api/fetch-api-component";
// import UseEffectPracticeTwo from "./use-effect-practice/use-effect-practice-2";
// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<RectangleBox />}/>
//       <Route path="/galance" element={<Mycomponent/>}/>
//       <Route path="/trusted-by" element={<TrustedbyComponent />}/>
//       <Route path="/our-promises" element={<OurPromisesComponent />}/>
//       <Route path="/contact" element={<ContactSection />}/>
//       <Route path="/college" element={<College/>}/>
//       <Route path="*" element={<NotFound />}/>
//     </Routes>
//     //  <div>
//     //   <UsestateformComponent />

//     // </div>
//     // <div>
//     //   <Lms/>
//     // </div>
//     <Routes>
//       <Route path="/api-fetch" element={<FetchApiComponent />} />
//       <Route path="/use-effect-practice-2" element={<UseEffectPracticeTwo />} />
//     </Routes>
    
       
//   );
// } 

// export default App;

import React from "react";
import RectangleBox from "./rectangle-box/rectangle-box-component";
import Mycomponent from "./Galance/galance-component";
import ContactSection from "./Contact/ContactSection";
import OurPromisesComponent from "./our-promises/our-promises";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import College from "./college/college-component.jsx";
import NotFound from "./NotFound";
import FetchApiComponent from "./fetch-api/fetch-api-component";
import UseEffectPracticeTwo from "./use-effect-practice/use-effect-practice-2";
import SignupFormComponent from "./signup-form-api/signup-form-component";
import { Routes, Route } from "react-router-dom";
import UseStateComponent  from "./usestate-1st/use-state-component.jsx"
import UserFetchViaEmail from "./user-fetch-via-email/user-fetch-via-email";
import UsestateformComponent  from "./usestate/use-state-component.jsx";
import AdditionOperationComponent   from "./addition-operation-in-state/addition-operation-component.jsx";
function App() {
  return (
    <Routes>
      {/* Main sections */}
      <Route path="/" element={<RectangleBox />} />
      <Route path="/galance" element={<Mycomponent />} />
      <Route path="/trusted-by" element={<TrustedbyComponent />} />
      <Route path="/our-promises" element={<OurPromisesComponent />} />
      <Route path="/contact" element={<ContactSection />} />
      <Route path="/college" element={<College />} />
<Route path="/use-state-form" element={<UsestateformComponent />} />
      {/* Practice pages */}
      <Route path="/api-fetch" element={<FetchApiComponent />} />
      <Route path="/use-effect-practice-2" element={<UseEffectPracticeTwo />} />
<Route path="/use-state" element={<UseStateComponent />} />
      {/* Signup Form */}
      <Route path="/signup-form" element={<SignupFormComponent />} />
<Route path="/addition-operation" element={<AdditionOperationComponent />} />
       <Route path="/user-fetch-path" element={<UserFetchViaEmail />} />

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
