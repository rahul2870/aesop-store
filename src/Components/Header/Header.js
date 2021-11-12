import React, { useState } from 'react'
import './style.css'
import Modal from '@mui/material/Modal';

const MenuArray = ["Skin Care", "Body & Hand", "Hair", "Fragrance", "Home", "Kits & Travel", "Gifts"]
export default function Header() {
    const [isMenu, setIsMenu] = useState(false)
    return <div>
        <Modal
            open={isMenu}
            onClose={() => setIsMenu(false)}
        >
            <section id='sm-menu'>
                <div id='sm-menu-header'>
                    <h4>Aesop</h4>
                    <div>
                        <p>Cart</p>
                        <aside onClick={() => setIsMenu(false)}><i class="fas fa-times"></i></aside>
                    </div>
                </div>
                <div id='sm-menu-header-list'>
                    {MenuArray.map((val, index) => <p data-aos="fade-right" data-aos-delay={50 + index * 50}>{val}</p>)}
                </div>
                <div id='sm-menu-header-read_stories'>
                    <p>Read</p>
                    <p>Stories</p>
                </div>
                <div id='sm-menu-header-bottom-bar'>
                    <p>Login</p>
                    <p>Search</p>
                </div>
            </section>
        </Modal>
        <main id='lg-header'>
            <section>
                {MenuArray.map((val, index) => <p data-aos="fade-right" data-aos-delay={50 + index * 50}>{val}</p>)}
                <p>Read</p>
                <p>Stores</p>
                <aside><i class="fas fa-search"></i></aside>
            </section>
            <section>
                <p>Login</p>
                <p>Cart</p>
            </section>
        </main>
        <main id='sm-header'>
            <p>Aesop.</p>
            <div>
                <p>Cart</p>
                <aside onClick={() => setIsMenu(true)}>
                    <div></div>
                    <div></div>
                </aside>
            </div>
        </main>
    </div>
}
