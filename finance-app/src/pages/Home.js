import { useEffect } from "react"
import { Container } from "react-bootstrap"
import Coindata from "../components/Coindata"

export default function Home ({coin, handleFetch }) {
    useEffect(()=> {
        handleFetch()
    }, [])
    const loaded = () => {
        return(
            <>
            <div id='webbannerdiv'>
            <img id='webbanner' src='https://en.expensereduction.com/wp-content/uploads/2019/01/Blockchain-Webpage-Banner.jpg' alt='web banner'/>

            </div>
            <div className="homepage">
            <Container className="homecontainer">
                <div className="basic-grid">
                    {coin.data.coins.map((c)=> {
                        return(
                        <div key={c.uuid} className='infocontainer'>
                            <Coindata coindata={c}/>
                            </div>
                        )
                    })}
                
            </div> 
            </Container>
            </div>
            </>
        )
    }
    const loading = () => {
       return(
        <h1 id='loading'>Loading....</h1>
    )  
    }
   return coin ? loaded() : loading()
}