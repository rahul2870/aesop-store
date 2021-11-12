import React from 'react'
import TopMostTitle from './Components/Top-title/TopTitle'
import Header from '../Components/Header/Header'
import TopImageCompo from './Components/Top-image/TopImage'
import FirstCarouselCompo from './Components/Product-carousel/ProductCarousel'
import TwoProductsCompo from './Components/Two-products/Two-products'
import StoreLocatorCompo from './Components/Store-locator/StoreLocator'
import AnatomySectionCompo from './Components/AnatomySection/AnatomySection'
import QuoteSectionCompo from './Components/QuoteSection/QuoteSection'
import FooterCompo from './Components/Footer/Footer'
export default function Home() {


    return <div>
        <TopMostTitle />
        <Header />
        <TopImageCompo />
        <FirstCarouselCompo />
        <TwoProductsCompo />
        <FirstCarouselCompo />
        <TwoProductsCompo />
        <StoreLocatorCompo />
        <AnatomySectionCompo />
        <QuoteSectionCompo />
        <FooterCompo />
    </div>
}
