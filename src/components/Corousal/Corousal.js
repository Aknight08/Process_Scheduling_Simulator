// import React, { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import './Corousal.css'; // Assuming this is the filename where you put the CSS code
// import image from './one.png';
// function Cor() {
//     const [index, setIndex] = useState(0);
  
//     const handleSelect = (selectedIndex) => {
//       setIndex(selectedIndex);
//     };
  
//     return (
//         <div className="carousel-container ">
//       <Carousel activeIndex={index} onSelect={handleSelect} >
//         <Carousel.Item>
//           {/* <text="First slide" /> */}
//           <img src={image} />
//           <Carousel.Caption>
//             <h3 className='text-center'>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           {/* <ExampleCarouselImage text="Second slide" /> */}
//           <img src={image} />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           {/* <ExampleCarouselImage text="Third slide" /> */}
//           <img src={image} />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//       </div>
//     );
//   }
  
//   export default Cor;