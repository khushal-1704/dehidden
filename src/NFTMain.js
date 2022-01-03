import React from 'react'
import './NFTMain.css'
import NFT_Utility from './NFT_Utility'


function NFTMain() {
    return (
        <div className='nft_main'>
            <div className="nft_utilities">
                <NFT_Utility imgSrc={'4'} head_pri={'View on IPFS'} head_sec={'Your NFT data stored safely forever'} />

                <NFT_Utility imgSrc={'5'} head_pri={'View AR experience'} head_sec={'See how your NFT looks in augmented reality'} />

                <NFT_Utility imgSrc={'6'} head_pri={'Download 3D Model'} head_sec={'Instantly get access to the blend file'} />

                <NFT_Utility imgSrc={'7'} head_pri={'Join the Community'} head_sec={'Unlock Community access with your NFT'} />
            </div>
        </div>
    )
}

export default NFTMain
