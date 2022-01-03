import React from 'react'
import AboutCard from './AboutCard'
import './NFTScreen.css'
import NFTMain from './NFTMain'

function NFTScreen() {
    return (
        <div className='nftScreen'>
            <div className='sng_logo'>
                <img src="/images/image_2.png" alt="" />
            </div>
            <AboutCard />
            <NFTMain />
        </div>
    )
}

export default NFTScreen
