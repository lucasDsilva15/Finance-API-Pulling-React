import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Coindata from "../components/Coindata"

export default function Home ({coin, handleFetch }) {
   const navigate = useNavigate()
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
                            <button id='arrow' onClick={()=> navigate(`/${c.uuid}`) }>More Info</button>
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