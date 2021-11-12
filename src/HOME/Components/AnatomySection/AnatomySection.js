import React from 'react'
import './style.css'

export default function AnatomySection() {

    return <div id='store-locator'>
        <section data-aos="fade-right" 
            data-aos-easing="ease-in-sine" id='store-locator-left'>
            <h2>Anatomy of Generosity</h2>
            <p>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
            <div>
                <p>Find a near by store</p>
                <i class="fas fa-arrow-right"></i>
            </div>
        </section>
        <section id='anatomy-right'>
            <img src="https://www.aesop.com/u1nb1km7t5q7/6kg0q5SHuO97FLD8nCaLck/d437f996eaf6da4834443dd811e9a3b3/Aesop_Gift_Kits_2021_Web_Homepage_Secondary_Kits_Listener_Mid_Desktop_2560x1440px.jpg" />
        </section>
    </div>
}
