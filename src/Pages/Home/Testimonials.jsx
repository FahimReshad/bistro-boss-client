import SectionTitle from "../../Components/Shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    }, [])
    return (
        <div className="my-20">
            <SectionTitle heading={'testimonials'} subHeading={"What Our Clients Say"}></SectionTitle>
           
            <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review => <SwiperSlide key={review._id}>
                 <div className="flex justify-center mb-6">
            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
            </div>
                <div className="text-center px-20">
                
                    <p>{review.details}</p>
                    <h3 className="text-2xl">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </>
        </div>
    );
};

export default Testimonials;