import React from "react";
// import "./About.css"
import vedio from "./vedio/vedio.mp4";
import { Carousel } from "react-bootstrap";
import si from  "./image/slider_image.jpg";
const Image_slider = () => {
    return(
    <>
    <h1 className="text-center my-2 terminal_heading">Testimonials</h1>
    <Carousel >
  <Carousel.Item>
    <img
      className=" slide "
      src={si} 
      alt="First slide"
    />
    <Carousel.Caption >
      <p className="image_paragraph1">Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!</p>
       <h3 className="image_heading1">-Aakriti Malik, DM Intern</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="  slide"
      src={si}
      alt="Second slide"
    />

    <Carousel.Caption>
      <p className="image_paragraph1">Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.</p>
      <h3 className="image_heading1">-Harsh Rajput, General Management Intern></h3>
     </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className=" slide"
      src={si}
      alt="Third slide"
    />

    <Carousel.Caption>
      <p className="image_paragraph1">TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.</p>
      <h3 className="image_heading1">-Anjali Srivastava, Content Intern</h3>
    </Carousel.Caption>
  </Carousel.Item>
<Carousel.Item>
    <img
      className=" slide"
      src={si}
      alt="Fourth slide"
    />

    <Carousel.Caption>
      <p className="image_paragraph4">I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant.

                                       Thank you team TEN!

</p>
      <h3 className="image_heading4">-Kshema Unni, Business Development Intern</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>

    
     );
 };
 export default Image_slider;