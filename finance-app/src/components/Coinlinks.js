export default function Coinlinks ({c}) {
    
    return(
        <>
            <a href={c.url}> {c.name} {c.type}</a><br/>
        </>
        
    )
}