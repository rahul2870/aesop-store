import React from 'react'
import './style.css'

const TwoOfList = [{
    id: 1,
    image: "https://www.aesop.com/u1nb1km7t5q7/3XXC95Lholbic6wkXGUAUi/72db58422c497f51d91ef30b1e44949a/Aesop_Gift_Kits_2021_Web_Homepage_Secondary_Product_Balms_Mid_Desktop_2560x1440px.jpg",
    title: "Body & Hand Care Gifts",
    desc: "Considered assortments of hand and body care, formulated to cleanse, nourish and invigorate the skin and senses.",
}, {
    id: 2,
    image: "https://www.aesop.com/u1nb1km7t5q7/4pLEw9zU2E5rERn8BYltbF/e2db04705238a7121c9d115fa632b8cc/Aesop_Gift_Kits_2021_Web_Homepage_Secondary_Product_BlueCham_Parsley_Damascan_Mid_Desktop_2560x1440px.jpg",
    title: "Skin Care Gifts ",
    desc: "Selections of cherished skin care—some for the novice with empty bathroom cabinets, others for the well-stocked expert.",
}]

export default function TwoProducts() {

    return <div className="two-product-compos">
        {TwoOfList.map((val, index) => <div data-aos="fade-up" data-aos-duration={1000 + index * 500}>
            <img src={val.image} />
            <h4>{val.title}</h4>
            <p>{val.desc}</p>
        </div>)}
    </div>
}
