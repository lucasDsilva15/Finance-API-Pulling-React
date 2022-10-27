import { useNavigate } from "react-router-dom"

export default function Coindata({coindata}) {
    let price = Number(coindata.price).toFixed(4)
    let navigate = useNavigate()
    return(
        <div className="coindata">
            <span> Name: {coindata.name}</span> <br/>
            <span> Symbol: {coindata.symbol}</span> <br/>
            <span> Price: ${price} </span> <br/>
            <button id='arrow' onClick={()=> navigate(`/${coindata.uuid}`) }>More Info</button>
            <br/>
        </div>
    )
    
}

