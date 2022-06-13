import React from 'react'
import "./coin.css"

const coin = ({name, image, symbol, price, volume, priceChange }) => {

    return (
        <div className='coin-container border p-5 mb-3 rounded '>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price}</p>
                    <p className='coin-price'>${volume.toLocaleString()}</p>


                    {priceChange < 0 ? (
                        <p className='coin-percent red'>
                            {priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='coin-percent green'>
                            {priceChange.toFixed(2)}%</p>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default coin;