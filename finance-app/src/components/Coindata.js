export default function Coindata({coindata}) {
        return(
        <div>
            <span> Name: {coindata.name}</span><br/>
            <span> Symbol: {coindata.symbol}</span><br/>
            <span> Price: {coindata.price} </span><br/>
            <br/>
        </div>
    )
}

