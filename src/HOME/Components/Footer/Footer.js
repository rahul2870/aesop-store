import React from 'react'
import './Footer.css'

export default function Footer() {


    return <div>

        <main id='footer'>


            <div className="footer-div-one for-lg">
                <div>
                    <input placeholder="Email address" />
                    <i class="fas fa-arrow-right"></i>
                </div>
                <div>
                    <aside></aside>
                    <div>
                        <p>Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our</p>
                        <h6>privacy policy&#8599;</h6>
                    </div>
                </div>
            </div>




            <section className="footer-section">
                <div className="footer-div-one for-sm">
                    <div>
                        <input placeholder="Email address" />
                        <i class="fas fa-arrow-right"></i>
                    </div>
                    <div>
                        <aside></aside>
                        <div>
                            <p>Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our</p>
                            <h6>privacy policy&#8599;</h6>
                        </div>
                    </div>
                </div>
                <div className="footer-normal-div">
                    <h5>Orders and support</h5>
                    <p>Contact us &#8599;</p>
                    <p>FAQs  &#8599;</p>
                    <p>Shipping &#8599;</p>
                    <p>Returns  &#8599;</p>
                    <p>Terms and conditions</p>
                </div>
                <div className="footer-normal-div">
                    <h5>Services</h5>
                    <p>Live assistance</p>
                    <p>Corporate gifts</p>
                    <p>Facial appointments</p>
                </div>
                <div className="footer-normal-div">
                    <h5>Location preferences</h5>
                    <p>Shipping: Hong Kong (S.A.R)</p>
                    <p>Language: English</p>
                </div>
            </section>
            <section className="footer-section">
                <div className="footer-normal-div">
                    <h5>Sustainability</h5>
                    <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                </div>
                <div className="footer-normal-div">
                    <h5>About</h5>
                    <p>Our story</p>
                    <p>Foundation  &#8599;</p>
                    <p>Careers</p>
                    <p>Privacy policy</p>
                    <p>Accessibility</p>
                </div>
                <div className="footer-normal-div">
                    <h5>Social media</h5>
                    <p>Instagram &#8599;</p>
                    <p>Twitter   &#8599;</p>
                    <p>LinkedIn  &#8599;</p>
                    <p>WeChat</p>
                    <p>Weibo   &#8599;</p>
                </div>
            </section>
        </main>
        <div id="footer-bottom-most">
            <p>© Aesop</p>
        </div>
    </div>
}
