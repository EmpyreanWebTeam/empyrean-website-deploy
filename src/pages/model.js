// import React, { useEffect, useState } from "react";
// import { motion, useViewportScroll, useTransform } from "framer-motion";
// import { Link } from "react-router-dom";

// //Images
// import gDash from '../images/gameStats/gameDashboard1.png';

// //Ease
// const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };


// const Model = ({ imageDetails }) => {
//   const { scrollYProgress } = useViewportScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

//   const [canScroll, setCanScroll] = useState(false);

//   useEffect(() => {
//     if (canScroll === false) {
//       document.querySelector("body").classList.add("no-scroll");
//     } else {
//       document.querySelector("body").classList.remove("no-scroll");
//     }
//   }, [canScroll]);

//   return (
//     <motion.div
//       onAnimationComplete={() => setCanScroll(true)}
//       className='single'
//       initial='initial'
//       animate='animate'
//       exit='exit'>
//       <div className='container fluid'>
//         <div className='row center top-row'>
//           <div className='top'>
            
//           </div>
//         </div>
//         <div className='row bottom-row'>
//           <div className='bottom'>
//             <motion.div className='image-container-single'>
//               <motion.div
//                 initial={{
//                   y: "-75%",
//                   width: imageDetails.width,
//                   height: imageDetails.height,
//                 }}
//                 animate={{
//                   y: "-100%",
//                   width: "100%",
//                   height: window.innerWidth > 1440 ? 800 : 400,
//                   transition: { delay: 0.2, ...transition },
//                 }}
//                 className='thumbnail-single'>
//                 <Link to='/dashboard'>
//                   <motion.div
//                     className='frame-single'
//                     whileHover='hover'
//                     transition={transition}>
//                       <motion.img
//                         src={gDash}
//                         alt='an image'
//                         style={{ scale: scale }}
//                         initial={{ scale: 1.0 }}
//                         animate={{
//                           transition: { delay: 0.2, ...transition },
//                           y: window.innerWidth > 1440 ? 1200 : 500,
//                         }}
//                       />
//                   </motion.div>
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
      
//     </motion.div>
//   );
// };

// export default Model;