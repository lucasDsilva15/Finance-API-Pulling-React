import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container} from 'react-bootstrap'

export default function About () {
    return(
        <>
        <div className='coinshowpage aboutpagestyle'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='titlerow'> About Crypto Coinnoseur </h1>
                        <p> 
                            Crypto Coinnoseur is a financial web application that can generate, data on all cyrptocurrencies
                            in our database. We specialize in providing high volumes of detail to each coin, while summarizing
                            key topics about the coin. We have a large coin database with over 20,000 coins. Our home page is the top 100 coins
                            based on ranking which is determined by coinranking.com. If you ever need more details on a specific coin we also have
                            links to take you to multiple sites with additional information on each coin.
                        </p>
                        <h2 className='titlerow'> Our mission </h2>
                        <p>
                            Our mission at Crypto Coinnoseur is simple. To create a base for cyrpto knowledge simple and accessible.
                            Navigating the Crypto space can be confusing. Which coin is good/bad? Is this coin under/overperforming? 
                            Should I hold long or sell quick? We hope to create a platform that can point you to the answers to these questions.
                        </p>
                    </Col>
                </Row>
                </Container>
                <Container>
                <Row>
                    <h2 className='titlerow'> Our Founder: Lucas Dasilva </h2>
                </Row>
                <Row>
            <p>
                Lucas Dasilva originally created Coinnoseur as a react project for his SWE bootcamp at PerScholas.
                The project was to teach students about how to create a react application using functional components
                complete with, page routing, axios fetch calling, passing down props, rendering api data correctly and efficently,
                styling a react app page, and having a complete web app hosted by netlify. Afer receiving funding by his instructors
                Jade and Oussama, it has turned into a multi-billion dollar idea.
                
            </p>
                </Row>
            
            </Container>
        </div>
            
        </>
        
    )
}