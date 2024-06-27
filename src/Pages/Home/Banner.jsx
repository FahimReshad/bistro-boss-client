
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'
import { useEffect, useState } from "react";

const Banner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{img: img1}, {img: img2}, {img: img3}, {img: img4}, {img: img5}, {img: img6}];
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
      const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
      return () => clearInterval(intervalId);
    }, [currentSlider, sliders.length]);
    return (
        <>
        <div className="w-full h-60 sm:h-96 md:h-[540px] lg:h-[740px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear object-cover"
            style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
            {/* text container here */}
            <div className="drop-shadow-lg text-white text-center px-5">
                <h1 className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
            </div>
        </div>
        {/* slider container */}
        <div className="flex justify-center items-center gap-3 p-2">
            {/* sliders */}
            {sliders.map((slide, inx) => (
                <img onClick={() => setCurrentSlider(inx)} key={inx}
                    src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                    alt={slide.title}/>
            ))}
        </div>
    </>
);
};

export default Banner;