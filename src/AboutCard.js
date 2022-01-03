import React from 'react'
import './AboutCard.css'

function AboutCard() {
    return (
        <div className='about_card'>
            <div className='nft_img'>
                <img src="/images/image_3.png" alt="" />
            </div>
            <div className='nft_eth'>Shards of ETH</div>
            <div className='nft_moon'>To the Moon</div>
            <div className='nft_num'>#001</div>
            <div className=" nft_button">
                <button className='btn btn_pri'>
                    <i className="fas fa-info-circle"></i>
                    <span className='sp_about'>About</span>
                </button>
            </div>
        </div>
    )
}

export default AboutCard
