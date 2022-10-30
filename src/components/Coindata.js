import { useNavigate } from "react-router-dom"

export default function Coindata({coindata}) {
    let price = Number(coindata.price).toFixed(4)
    let navigate = useNavigate()
    return(
        <>
        <div className="coindata">
            <span> Name: {coindata.name}</span> 
            <span> Symbol: {coindata.symbol}</span> 
            <span> Price: ${price} </span> 
            <br/>
        </div>
        <div className="arrowcontainer">
             <p id='arrow' onClick={()=> navigate(`/${coindata.uuid}`) }><i class="arrow right"></i></p>
        </div>
        </>
        
    )
    
}

