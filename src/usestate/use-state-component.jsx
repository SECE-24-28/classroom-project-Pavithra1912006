// // 
// // 
// import React from 'react';
// import {Lmsstyle} from "./use-state-style";
// const Lms=()=>{
//   return (
//     <Lmsstyle>
// <div className='heading'>
//   <h2>Aptitude Guru Hem <span>LMS</span></h2>
// </div>
// <div className="box">
//   <div className='name'>
// <label for="fname">First Name</label><br></br>
// <input type="text" id="fname" placeholder="Enter first name"/><br></br>
// <label for="lname">Last Name</label><br></br>
// <input type="text" id="lname" placeholder="Enter last name"/>
//   </div>
//   <div className="select">
//     <label for="college"> Select College</label><br>
//     </br>
//     <select id="college">
// <option value="Sri eshwar college of engineering">Sri eshwar college of engineering</option>
// <option value="Sri eshwar college of engineering">SNS  college of engineering</option>
// <option value="Sri eshwar college of engineering">PSG  college of engineering</option>
// <option value="Sri eshwar college of engineering">AGH  college of engineering</option>
//     </select> <br></br>
//     <label for="year">Select Passout Year</label><br></br>
//     <select id="year">
//       <option value="2024">2024</option>
//         <option value="2025">2025</option>
//           <option value="2026">2026</option>
//             <option value="2027">2027</option>
//    </select >
//   </div>
// <label for="Dept">Department</label><br></br>
// <input type='text' id="Dept" placeholder="CSE"></input>
//   <label for="ug">Ug or Pg</label>
//   <select id="ug">
//     <option value="UG">
//       UG
//     </option>
//       <option value="PG">
//       PG
//     </option>
//   </select>



//   <div className="Email">
//     <label for="email">Email</label>
//     <input type="text" id="email" placeholder='Enter email address'/>
//         <label for="Mobile">Mobile</label>
//     <input type="number" id="Mobile" placeholder='Enter Mobile number'/>
//   </div>


// </div>
// </Lmsstyle>
//   );
// };
// export default Lms;







import React, { useState } from "react";
import { FormContainer } from "./use-state-style";

const UsestateformComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <FormContainer>
      <h1>
        Aptitude Guru Hem <span>LMS</span>
      </h1>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter first name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter last name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Select College</label>
            <select>
              <option value="">Select College</option>
              <option>AGH B2C</option>
              <option>IIT Delhi</option>
              <option>IIT Bombay</option>
              <option>NIT Trichy</option>
              <option>BITS Pilani</option>
            </select>
          </div>
          <div className="form-group">
            <label>Select Passout Year</label>
            <select>
              <option value="">Select Passout Year</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Department</label>
            <select>
              <option value="">Select Department</option>
              <option>CSE</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>Mechanical</option>
              <option>Civil</option>
            </select>
          </div>
          <div className="form-group">
            <label>Ug or Pg</label>
            <select>
              <option value="">Select UG/PG</option>
              <option>UG</option>
              <option>PG</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email address" />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <div className="mobile-group">
              <select>
                <option>IND</option>
              </select>
              <input type="tel" placeholder="Enter Mobile number" />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group password-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter the password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁 Show
            </button>
          </div>
          <div className="form-group password-group">
            <label>Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter the confirm password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              👁 Show
            </button>
          </div>
        </div>

        <ul className="password-requirements">
          <li>minimum 8 character</li>
          <li>one lowercase character</li>
          <li>one special character</li>
          <li>one uppercase character</li>
          <li>one number</li>
        </ul>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </FormContainer>
  );
};

export default UsestateformComponent;