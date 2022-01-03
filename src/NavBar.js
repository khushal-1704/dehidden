import React, { useEffect, useState } from 'react'
import './NavBar.css'
import ClipboardJS from "clipboard";

new ClipboardJS(".button");

function NavBar() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 10) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <div className={`navbar ${show && `nav_background`}`}>
            <div className="nav_left">
                <img src="/images/image_1.png" alt="" />
            </div>
            <div className="nav_right">
                <div className="linkbar">
                    <div className='clip'>Copied to Clipboard</div>
                    <div className='linktext'>https://run.mocky.io/v3/8321cc85-81e6-45c6-bd23-33e85c504c7d</div>
                    <button className='btn btn_copy' data-clipboard-action="copy"
                        data-clipboard-target=".linktext">
                        <i className="fas fa-copy"></i>
                        Copy
                    </button>
                </div>
            </div>
            <div className="nav_mov">
                <button className='btn btn_share'>Share</button>
            </div>
        </div>
    )
}

export default NavBar
