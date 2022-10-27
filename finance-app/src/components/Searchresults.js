import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function Searchresults ({data}) {
    const navigate = useNavigate()
    return(
        <Container>
           <div id='searchresults' className="titlerow">
            <h1 id='searchresultlink' onClick={()=> navigate(`/${data.uuid}`)}> {data.name} </h1>
            
        </div> 
        </Container>
        
        
    )
}