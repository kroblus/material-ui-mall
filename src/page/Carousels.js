import React from 'react';
import { Carousel } from 'antd';
import img1 from "../productImg/12.jpg";
import img2 from "../productImg/13.jpg";
import img3 from "../productImg/14.jpg";
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Carousels = () => (
    <Carousel effect="fade" autoplay>
      <div align='center'>
        <img src={img1} alt="img1" width='1000px'/>
      </div>
      <div align='center'>
          <img src={img2} alt="img2" width='1000px'/>
      </div>
      <div align='center'>
          <img src={img3} alt="img3" width='1000px'/>
      </div>
    </Carousel>
);

export default Carousels;