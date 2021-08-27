// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import ProgressiveImage from "react-progressive-image";


// // Images
// import gLeft from '../images/ecGateLeft.png';
// import gRight from '../images/ecGateRight.png';
// import swiperScreen from '../images/swiperScreen.png';

// // Style
// import "../style/doors.css";

// // Video



// const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

// const Home = ({ imageDetails, image }) => (
  
//       <div className='container'>
//         <div className='row center'>
//           <div className='image-container'>
//             <div
//               className='thumbnail'
//               ref={image}
//               style={{
//                 width: imageDetails.width,
//                 height: imageDetails.height,
//               }}>

//               <div className="wrapper">
//                 <div className="gLeftandRight">
//                   <div id="left-door" className="lDoor">
//                     <img src={gLeft} className="gLeft" alt="leftDoor">
//                     </img>
//                   </div>
                
//                   <div className='frame'>
//                     <Link to={`/swiper/empyrean`}>
//                       <ProgressiveImage
//                         src={require("../images/swiperScreen.png")}
//                         placeholder={require("../images/swiperScreen.png")}>
//                         {(src) => (
//                           <motion.img
//                             src={swiperScreen}
//                             alt='Empyrean'
//                             whileHover={{ scale: 1.1 }}
//                             transition={transition}
//                           />
//                         )}
//                       </ProgressiveImage>
//                     </Link>
//                   </div>
              
//                   <div id="right-door" className="rDoor">
//                     <img src={gRight} className="gRight" alt="rightDoor">
//                     </img>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
    
//     );
 
// export default Home;