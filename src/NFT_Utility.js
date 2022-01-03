import React from 'react'
import './NFT_Utility.css'

function NFT_Utility({ imgSrc, head_pri, head_sec }) {
    return (
        <div className='nft_utility'>
            <div className="utility_img">
                <img src={`/images/image_${imgSrc}.png`} alt="" />
            </div>
            <div className="utility_content">
                <div className="utility_pri">{head_pri}</div>
                <div className="utility_sec">{head_sec}</div>
            </div>
        </div>
    )
}

export default NFT_Utility; 
