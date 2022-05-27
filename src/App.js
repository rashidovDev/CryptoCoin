import React ,{useState, useEffect} from "react";

import axios from "axios"
import "./App.css"
import Coin from "./Coin"

export default function App(){

    const [coin, setCoin] = useState([]);
    const  [search, setSearch] = useState('')
   
    useEffect(() =>{
        
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(res => {
            setCoin(res.data)
            
        }).catch(error => console.log("err"))
    },[]);


    const handleChange = e =>{
        setSearch (e.target.value)
    }

    const filteredCoins = coin.filter( coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    )


    return(
        <div className="main-app">
            <div className="main-search">
                <h1 className="main-text"></h1>
                <form>
                    <input 
                     type="text"
                      placeholder="Search..."
                      className="main-input"
                      onChange={handleChange}
                      />
                </form>
            </div>
            {filteredCoins.map(coin =>{
                return(
                    <Coin  
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol = {coin.symbol}
                    marketCap = {coin.market_cap}
                    price={coin.current_price}
                    priceChange ={coin.price_change_percentage_24h}
                    volume ={coin.total_volume}
                     />
                )
            })}
        </div>
    )
}