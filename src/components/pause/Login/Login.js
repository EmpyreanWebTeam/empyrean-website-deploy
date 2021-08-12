// import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
// // Images
// // import gLeft from '../../images/ecGateLeft.png';
// // import gRight from '../../images/ecGateRight.png';

// // Components
// import Signup from './Signup';
// import ECvid from '../ECvid.js';


// import './Login.css';
// // import '../../style/doors.css';


// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
//    }
// export default function Login({ setToken }) {
//     const [username, setUserName] = useState();
//     const [password, setPassword] = useState();

//     const handleSubmit = async e => {
//         e.preventDefault();
//         const token = await loginUser({
//           username,
//           password
//         });
//         setToken(token);
//         console.log('login!');
//       }

//   return(
//     <div className="background"
//          style={{
//             height: "115%",
//     }}>
//     <div className="wrapper" tabIndex="1">
//         {/* <div className="gLeftandRight">
//           <div id="left-door" className="lDoor">
//             <img src={gLeft} className="gLeft" alt="leftDoor">
//             </img>
//           </div> */}
//       <div className="login-wrapper">
        
//           <ECvid />
      
//             <div className="sliderCard">

//               <h1>Please Log In</h1>
//               <form onSubmit={handleSubmit}>
//                 <label>
//                   <p>Username</p>
//                   <input type="text" onChange={e => setUserName(e.target.value)}/>
//                 </label>
//                 <label>
//                   <p>Password</p>
//                   <input type="password" onChange={e => setPassword(e.target.value)}/>
//                 </label>
                
//                 <div className="buttons">
                  
//                   <div className="loginBTN">
//                     <Button
//                       variant="contained" 
//                       type="submit" 
//                       color="primary">
//                         Login
//                     </Button>
//                   </div>
                
//                   <div className="signupBTN">
//                     <Button>
//                       <Signup />
//                     </Button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>

//         {/* <div id="right-door" className="rDoor">
//           <img src={gRight} className="gRight" alt="rightDoor">
//           </img>
//           </div>
//         </div>
//       </div> */}
//     </div>
//     </div>
//   )
// }

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }