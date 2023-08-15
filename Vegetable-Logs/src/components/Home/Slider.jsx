




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import  { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, EffectCoverflow,Autoplay} from 'swiper/modules';


// import { EffectCoverflow } from 'swiper';
// import Swiper core and required modules
import './Slider.css';




function Slider() {
  
  return (
    <div className="contain">
      <h1 className="headingg">Our Prices</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Include Autoplay module
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay configuration
                className="swiper_container"
      >
       <SwiperSlide>
            <div className="swiper-slide">
         
         <div className="slide-content">
           <h1 className="state">UTTARAKHAND</h1>
           <div className="content">
            <div>
             <h2>Item Name</h2>
             <p>Onion</p>
             <p>Potato</p>
             <p>Tomato</p>
             <p>Brinjal</p>
             <p>Cauliflower</p>
             <p>Ladyfinger</p>
            </div>
            <div>
             <h2>Item Price</h2>
             <p>100/kg</p>
             <p>90/kg</p>
             <p>70/kg</p>
             <p>120/kg</p>
             <p>140/kg</p>
             <p>80/kg</p>
            </div>
           </div>
         </div>
       </div>
        </SwiperSlide><SwiperSlide>
            <div className="swiper-slide">
         
         <div className="slide-content">
           <h1 className="state">UTTARAKHAND</h1>
           <div className="content">
            <div>
             <h2>Item Name</h2>
             <p>Onion</p>
             <p>Potato</p>
             <p>Tomato</p>
             <p>Brinjal</p>
             <p>Cauliflower</p>
             <p>Ladyfinger</p>
            </div>
            <div>
             <h2>Item Price</h2>
             <p>100/kg</p>
             <p>90/kg</p>
             <p>70/kg</p>
             <p>120/kg</p>
             <p>140/kg</p>
             <p>80/kg</p>
            </div>
           </div>
         </div>
       </div>
        </SwiperSlide><SwiperSlide>
            <div className="swiper-slide">
         
         <div className="slide-content">
           <h1 className="state">UTTARAKHAND</h1>
           <div className="content">
            <div>
             <h2>Item Name</h2>
             <p>Onion</p>
             <p>Potato</p>
             <p>Tomato</p>
             <p>Brinjal</p>
             <p>Cauliflower</p>
             <p>Ladyfinger</p>
            </div>
            <div>
             <h2>Item Price</h2>
             <p>100/kg</p>
             <p>90/kg</p>
             <p>70/kg</p>
             <p>120/kg</p>
             <p>140/kg</p>
             <p>80/kg</p>
            </div>
           </div>
         </div>
       </div>
        </SwiperSlide><SwiperSlide>
            <div className="swiper-slide">
         
         <div className="slide-content">
           <h1 className="state">UTTARAKHAND</h1>
           <div className="content">
            <div>
             <h2>Item Name</h2>
             <p>Onion</p>
             <p>Potato</p>
             <p>Tomato</p>
             <p>Brinjal</p>
             <p>Cauliflower</p>
             <p>Ladyfinger</p>
            </div>
            <div>
             <h2>Item Price</h2>
             <p>100/kg</p>
             <p>90/kg</p>
             <p>70/kg</p>
             <p>120/kg</p>
             <p>140/kg</p>
             <p>80/kg</p>
            </div>
           </div>
         </div>
       </div>
        </SwiperSlide><SwiperSlide>
            <div className="swiper-slide">
         
         <div className="slide-content">
           <h1 className="state">UTTARAKHAND</h1>
           <div className="content">
            <div>
             <h2>Item Name</h2>
             <p>Onion</p>
             <p>Potato</p>
             <p>Tomato</p>
             <p>Brinjal</p>
             <p>Cauliflower</p>
             <p>Ladyfinger</p>
            </div>
            <div>
             <h2>Item Price</h2>
             <p>100/kg</p>
             <p>90/kg</p>
             <p>70/kg</p>
             <p>120/kg</p>
             <p>140/kg</p>
             <p>80/kg</p>
            </div>
           </div>
         </div>
       </div>
        </SwiperSlide><SwiperSlide>
            <div className="swiper-slide">
         
         <div className="slide-content">
           <h1 className="state">UTTARAKHAND</h1>
           <div className="content">
            <div>
             <h2>Item Name</h2>
             <p>Onion</p>
             <p>Potato</p>
             <p>Tomato</p>
             <p>Brinjal</p>
             <p>Cauliflower</p>
             <p>Ladyfinger</p>
            </div>
            <div>
             <h2>Item Price</h2>
             <p>100/kg</p>
             <p>90/kg</p>
             <p>70/kg</p>
             <p>120/kg</p>
             <p>140/kg</p>
             <p>80/kg</p>
            </div>
           </div>
         </div>
       </div>
        </SwiperSlide><SwiperSlide>
            <div className="swiper-slide">
         
         <div className="slide-content">
           <h1 className="state">UTTARAKHAND</h1>
           <div className="content">
            <div>
             <h2>Item Name</h2>
             <p>Onion</p>
             <p>Potato</p>
             <p>Tomato</p>
             <p>Brinjal</p>
             <p>Cauliflower</p>
             <p>Ladyfinger</p>
            </div>
            <div>
             <h2>Item Price</h2>
             <p>100/kg</p>
             <p>90/kg</p>
             <p>70/kg</p>
             <p>120/kg</p>
             <p>140/kg</p>
             <p>80/kg</p>
            </div>
           </div>
         </div>
       </div>
        </SwiperSlide><SwiperSlide>
            <div className="swiper-slide">
         
         <div className="slide-content">
           <h1 className="state">UTTARAKHAND</h1>
           <div className="content">
            <div>
             <h2>Item Name</h2>
             <p>Onion</p>
             <p>Potato</p>
             <p>Tomato</p>
             <p>Brinjal</p>
             <p>Cauliflower</p>
             <p>Ladyfinger</p>
            </div>
            <div>
             <h2>Item Price</h2>
             <p>100/kg</p>
             <p>90/kg</p>
             <p>70/kg</p>
             <p>120/kg</p>
             <p>140/kg</p>
             <p>80/kg</p>
            </div>
           </div>
         </div>
       </div>
        </SwiperSlide><SwiperSlide>
            <div className="swiper-slide">
         
         <div className="slide-content">
           <h1 className="state">UTTARAKHAND</h1>
           <div className="content">
            <div>
             <h2>Item Name</h2>
             <p>Onion</p>
             <p>Potato</p>
             <p>Tomato</p>
             <p>Brinjal</p>
             <p>Cauliflower</p>
             <p>Ladyfinger</p>
            </div>
            <div>
             <h2>Item Price</h2>
             <p>100/kg</p>
             <p>90/kg</p>
             <p>70/kg</p>
             <p>120/kg</p>
             <p>140/kg</p>
             <p>80/kg</p>
            </div>
           </div>
         </div>
       </div>
        </SwiperSlide><SwiperSlide>
            <div className="swiper-slide">
         
         <div className="slide-content">
           <h1 className="state">UTTARAKHAND</h1>
           <div className="content">
            <div>
             <h2>Item Name</h2>
             <p>Onion</p>
             <p>Potato</p>
             <p>Tomato</p>
             <p>Brinjal</p>
             <p>Cauliflower</p>
             <p>Ladyfinger</p>
            </div>
            <div>
             <h2>Item Price</h2>
             <p>100/kg</p>
             <p>90/kg</p>
             <p>70/kg</p>
             <p>120/kg</p>
             <p>140/kg</p>
             <p>80/kg</p>
            </div>
           </div>
         </div>
       </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;