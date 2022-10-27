import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Coindata from "../components/Coindata"

export default function Home ({coin, handleFetch }) {
   const navigate = useNavigate()
    useEffect(()=> {
        handleFetch()
    }, [])
    const loaded = () => {
        return(
            <Container>
                <div className="basic-grid">
                    {coin.data.coins.map((c)=> {
                        return(
                        <div key={c.uuid}>
                            <Coindata coindata={c}/>
                            </div>
                        )
                    })}
                
            </div> 
            </Container>
           
        )
    }
    const loading = () => {
       return(
        <h1 id='loading'>Loading....</h1>
    )  
    }
   return coin ? loaded() : loading()
}