import { useEffect } from "react"
import Coindata from "../components/Coindata"

export default function Home ({coin, setCoin, handleFetch, options, }) {
    useEffect(()=> {
        handleFetch()
    }, [])
    const loaded = () => {
        return(
            <div className="homepage">
                    {coin.data.coins.map((c)=> {
                        return(
                        <div className="coindata" key={c.uuid}>
                            <Coindata coindata={c}/>
                            </div>
                        )
                    })}
                
            </div>
        )
    }
    const loading = () => {
       return(
        <h1 id='loading'>Loading....</h1>
    )  
    }
   return coin ? loaded() : loading()
}