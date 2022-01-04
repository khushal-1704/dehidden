import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';


function NavBar() {
    const [show, handleShow] = useState(false);
    const [value, setValue] = useState('https://run.mocky.io/v3/8321cc85-81e6-45c6-bd23-33e85c504c7d')
    const [copy, setCopy] = useState(false)

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
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
            console.log(copy)
        }, 2500)

    }

    return (
        <div className={`navbar ${show && `nav_background`}`}>
            <div className="nav_left">
                <img src="/images/image_1.png" alt="" />
            </div>
            <div className="nav_right">
                <div className="linkbar">
                    <div className='clip' style={{ display: copy ? 'block' : 'none' }} >Copied to Clipboard</div>
                    <input className='linktext' value={value} readOnly ></input>
                    <CopyToClipboard onCopy={handleClick} text={value}>
                        <button className='btn btn_copy' >
                            <i className="fas fa-copy"></i>
                            <span>Copy</span>
                        </button>
                    </CopyToClipboard>
                </div>
            </div>
            <div className="nav_mov">
                <CopyToClipboard onCopy={handleClick} text={value} >
                    <button className='btn btn_share'>Share</button>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default NavBar
