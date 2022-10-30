import { useEffect, useState } from "react"
import Searchresults from "../components/Searchresults"
import axios from "axios"
import { Col, Container, Row } from "react-bootstrap"

export default function Search () {
    
    const [search, setSearch] = useState('')
    const [results, setResults] = useState()
    
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/search-suggestions',
  params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', query: search},
  headers: {
    'X-RapidAPI-Key': '810097d294msh97583cfc2e257fdp1a880cjsn27592f23169f',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

const handleSearch = () => {
    axios.request(options).then(function (response) {
	setResults(response.data);
}).catch(function (error) {
	console.error(error);
});
}

useEffect(() => {
   let timeOut = setTimeout(() => {
        handleSearch()
    }, (800))
    
    return () => clearTimeout(timeOut)

}, [search])


    return(
        <Container fluid className="searchstyle">
            <Col>
            <Row>
               <h1 className="titlerow"> Use this page to search for coins </h1> 
            </Row>  
            <Container fluid>
              <form className="centersearch">
            <label htmlFor="search"> Search: </label>
            <input id='search' type='text' value={search} onChange={handleChange}/>
        </form>  
            </Container>
        
        {results ? (
            results.data.coins.map((data) => {
                return(
                    <div id='searchresultscontainer'>
                        <Searchresults key={data.uuid} data={data}/>
                    </div>
                    
                )
            })
        ) : (
            (
                <div id='loading'>
                    <h1 className="titlerow"> Loading...</h1>
                </div>
                
            )
        )}  
            </Col>
          
        </Container>
        
        
    )
}