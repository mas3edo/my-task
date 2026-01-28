import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./ImageCarousel.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// استيراد الصور
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";

const images = [image5, image6, image7];

function ImageCarousel() {
  // التغيير هنا: استخدمنا state بدلاً من ref
  // ده بيضمن إن Swiper يحس بالزراير حتى لو اتأخرت في التحميل
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className="cursol-gold">
      <div className="carousel-oval-container">
        {/* زر السابق */}
        <button
          type="button"
          className="carousel-arrow left"
          // هنا بنربط الزرار بالـ State
          ref={(node) => setPrevEl(node)}
          aria-label="Previous image"
        >
          <Icon icon="ic:round-chevron-left" width="36" height="36" />
        </button>

        <Swiper
          className="carousel-swiper"
          modules={[Navigation]}
          slidesPerView={1}
          // خاصية اللوب اللانهائي
          loop={true}
          speed={550}
          // ربطنا الزراير اللي عملناها فوق
          navigation={{
            prevEl,
            nextEl,
          }}
          // خاصية مهمة عشان الصور متبوظش لو ضغطت بسرعة
          grabCursor={true}
          aria-label="Image carousel"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`carousel-${idx + 1}`}
                className="carousel-image"
                draggable="false"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* زر التالي */}
        <button
          type="button"
          className="carousel-arrow right"
          // هنا بنربط الزرار بالـ State
          ref={(node) => setNextEl(node)}
          aria-label="Next image"
        >
          <Icon icon="ic:round-chevron-right" width="36" height="36" />
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;
