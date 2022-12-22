import React, {useEffect, useState} from "react";
import "./Sliders.scss";
import SwiperCore, {A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar, Virtual} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css';


interface SlidersProps {
    images: string[]
}

export function Sliders({images}: SlidersProps) {
    const [swiper, setSwiperLocal] = useState<SwiperCore | null>(null);
    const [activeStep, setActiveStep] = useState<number>(0);

    SwiperCore.use([Virtual, Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);

    return (
        <div className={"slider-container"}>
            <Swiper
                loop={true}
                slidesPerView={1}
                effect={"fade"}
                speed={1000}
                autoplay={{delay: 2000}}
                onSwiper={setSwiperLocal}
            >
                {images.map((_, index) =>
                    <SwiperSlide key={`slide-${index}`}>
                        <div className="slider__image-ibg">
                            <img src={_} alt=""/>
                        </div>
                    </SwiperSlide>
                )}
                {/*<SwiperSlide>

                    <div className="slider__image-ibg">
                        <img src={images[0]} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__image-ibg">
                        <img src={images[1]} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__image-ibg">
                        <img src={images[2]} alt=""/>
                    </div>
                </SwiperSlide>*/}
            </Swiper>
        </div>

    )
}