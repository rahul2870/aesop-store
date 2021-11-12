import React from 'react'
import './style.css'
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function ProductCarousel() {

    const productList = [{
        id: 1,
        image: "https://www.aesop.com/u1nb1km7t5q7/2cACZYBRezEJSSkOnyHsNr/26ae5054fc9b0c24e9d230403e029b3b/Aesop_Kits_Gift_Kits_2021-22_The_Listener_Web_Large_1584x962px.png",
        titleOne: "The Listener",
        titleTwo: "Cleanser, balm, scrub "
    }, {
        id: 2,
        image: "https://www.aesop.com/u1nb1km7t5q7/7rsGNhyanqorJsjeYA6t5g/42996fa83c40028f8ff0f46eccd9c914/Aesop_Kits_Gift_Kits_2021-22_The_Forager_Web_Medium_1238x752px.png",
        titleOne: "The Forager",
        titleTwo: "Two invigorating body care staples "
    }, {
        id: 3,
        image: "https://www.aesop.com/u1nb1km7t5q7/3cuLyBEVKlYluA5XaEL8j/223e3a373c285371b75b42ff9344b205/Aesop_Kits_Gift_Kits_2021-22_The_Advocate_Web_Medium_1238x752px.png",
        titleOne: "The Advocate",
        titleTwo: "Four hand and body care staples"
    }, {
        id: 4,
        image: "https://www.aesop.com/u1nb1km7t5q7/5QAO45HHH6sTF416DzWPjz/c657b19cca9728c452496143d9c31865/Aesop_Kits_Gift_Kits_2021-22_The_Protector_Web_Medium_1238x752px.png",
        titleOne: "The Protector",
        titleTwo: "For maintaining aromatic balance at home"
    }, {
        id: 5,
        image: "https://www.aesop.com/u1nb1km7t5q7/5QAO45HHH6sTF416DzWPjz/c657b19cca9728c452496143d9c31865/Aesop_Kits_Gift_Kits_2021-22_The_Protector_Web_Medium_1238x752px.png",
        titleOne: "The Mentor",
        titleTwo: "Cleanser, toner, hydrating serum "
    }]

    return (
        <div id='home-carousel'>
            <Splide
                options={{
                    rewind: true,
                    gap: '80px',
                    type: 'loop',
                    perPage: 3,
                    perMove: 1,
                    autoplay: true,
                    interval: 1400,
                    flickMaxPages: 1,
                    easing: "ease",
                    trimSpace: true,
                    updateOnMove: true,
                    arrows: false,
                    drag: true,
                    speed: '2000',
                    pagination: false,
                    throttle: 2000,
                    lazyLoad: "sequential",
                    breakpoints: {
                        790: {
                            perPage: 1,
                            margin: '10%'
                        }
                    }
                }}
               // hasAutoplayProgress={true}
                
            >
                {productList.map(val => <SplideSlide>
                    <div className="product-carousel">
                        <img src={val.image} />
                        <h5>{val.titleOne}</h5>
                        <p>{val.titleTwo}</p>
                    </div>
                </SplideSlide>)} 
            </Splide>
        </div>
    )
}
