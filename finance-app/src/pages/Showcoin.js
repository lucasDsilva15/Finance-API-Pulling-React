import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser'
import Coinlinks from "../components/Coinlinks";
export default function Showcoin ({}) {
    const params = useParams()
    const id = params.id
    let [thisCoin, setThisCoin] = useState()
    console.log(id)
    const options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
        params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h'},
        headers: {
          'X-RapidAPI-Key': '810097d294msh97583cfc2e257fdp1a880cjsn27592f23169f',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };
      const fetchData = () => {
        axios.request(options).then(function (response) {
          console.log(response.data);
          setThisCoin(response.data)
      }).catch(function (error) {
          console.error(error);
      });
      }
      
      useEffect(() => {
        fetchData()
      }, [])
    
      const loading = () => {
        return(
            <h1> Loading ...</h1>
        )
      }
      const loaded = () => {
        return(
            <div id='coinstats'>
                <img src={thisCoin.data.coin.iconUrl} alt='icon unavailable' height='200' width='200'/>
                <h1>{thisCoin.data.coin.symbol} {thisCoin.data.coin.name}</h1>
                <span className="coinstats">All time High: ${thisCoin.data.coin.allTimeHigh.price} </span>
                <span className="coinstats">Current Price: ${thisCoin.data.coin.price}</span>
                <span className="coinstats">Current Supply: {thisCoin.data.coin.supply.total}</span>
                <br/><h2>Description:</h2> <br/>{parse(thisCoin.data.coin.description)} <br/>
                <span className="coinstats"> Learn More about this coin: </span>
                    {thisCoin.data.coin.links.map((c, i) => {
                    return(
                        <Coinlinks c={c} key={i}/> 
                    )
                })} 
            </div>
        
      )
      }
      return thisCoin ? loaded() : loading()
}