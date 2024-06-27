import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

// import required modules
import {  Pagination } from 'swiper/modules';
import SectionTitle from '../../Components/Shared/SectionTitle';

const CategoryFood = () => {
    return (
        <section>
            <SectionTitle
             subHeading={"---From 11.00 am to 10.00 pm---"} 
            heading={"Order Online"}>
            </SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <img className='w-full' src={slide1} alt="" /> 
            <h3 className='text-xl lg:text-4xl font-semibold uppercase text-white text-center -mt-14 md:-mt-40 italic'>Salad</h3>
          </SwiperSlide>
          <SwiperSlide><img className='w-full' src={slide2} alt="" /><h3 className='text-xl lg:text-4xl font-semibold uppercase text-white text-center -mt-14 md:-mt-40 italic'>Soup</h3></SwiperSlide>
          <SwiperSlide><img className='w-full' src={slide3} alt="" /><h3 className='text-xl lg:text-4xl font-semibold uppercase text-white text-center -mt-14 md:-mt-40 italic'>Pizzas</h3></SwiperSlide>
          <SwiperSlide><img className='w-full' src={slide4} alt="" /><h3 className='text-xl lg:text-4xl font-semibold uppercase text-white text-center -mt-14 md:-mt-40 italic'>Deserts</h3></SwiperSlide>
          <SwiperSlide><img className='w-full' src={slide5} alt="" /><h3 className='text-xl lg:text-4xl font-semibold uppercase text-white text-center -mt-14 md:-mt-40 italic'>Salad</h3></SwiperSlide>
        </Swiper>
      </section>
    );
};

export default CategoryFood;