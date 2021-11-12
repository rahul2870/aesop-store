import React from 'react'
import './style.css'
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function StoreLocator() {
    const ImageList = ["https://www.aesop.com/u1nb1km7t5q7/DqJCGx3tPeDqODieHw5uA/48f50fbd1758ee27990a600c131bd2ce/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.jpg", "https://www.aesop.com/u1nb1km7t5q7/40xVxq4tBdXpyJLXVTQPvO/aa8ef7a4cca7a713e12b58f1ab8cc6ea/Aesop-HK-K11-Hero-Bleed-Desktop-2880x1620px.jpg", "https://www.aesop.com/u1nb1km7t5q7/3b6KRiDt3QpNut8LoYGgB9/1d62a7373daa8a6ba4dff6ea300b891e/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg"]


    return <div id='store-locator'>
        <section data-aos="fade-right"
            data-aos-easing="ease-in-sine" id='store-locator-left'>
            <h2>Store Locator</h2>
            <p>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
            <div>
                <p>Find a near by store</p>
                <i class="fas fa-arrow-right"></i>
            </div>
        </section>
        <section id='store-locator-right'>
            <Splide
                options={{
                    rewind: true,
                    type: 'loop',
                    perPage: 1,
                    perMove: 1,
                    autoplay: true,
                    interval: 1000,
                    flickMaxPages: 1,
                    easing: "linear",
                    trimSpace: true,
                    updateOnMove: true,
                    arrows: false,
                    drag: true,
                    speed: '4000',
                    pagination: false,
                    breakpoints: {
                        790: {
                            perPage: 1,
                            margin: '10%'
                        }
                    }
                }}
            // hasAutoplayProgress={true}

            >
                {ImageList.map(val => <SplideSlide>
                    <div className="store-locator-carousel">
                        <img src={val} />
                    </div>
                </SplideSlide>)}
            </Splide>
        </section>
    </div>
}
