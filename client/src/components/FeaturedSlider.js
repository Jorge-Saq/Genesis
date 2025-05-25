// components/FeaturedSlider.js

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import '../index.css';
import featuredData from '../data/featuredData';

const FeaturedSlider = () => {
  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {featuredData.map((piece, index) => (
          <SwiperSlide key={index}>
            {/* Full background image using inline styles */}
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${piece.image})` }}
            >
              {/* Overlay: adds dark layer for text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">{piece.title}</h2>
                <p className="text-lg italic text-orange-200 mt-2">by {piece.author}</p>
                <p className="text-base md:text-lg text-white max-w-xl mt-4">{piece.excerpt}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedSlider;
