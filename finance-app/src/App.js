import axios from 'axios';
import { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Showcoin from './pages/Showcoin';
import About from './pages/About';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Search from './pages/Search';
function App() {
  let [coin, setCoin] = useState()
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '51',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': '810097d294msh97583cfc2e257fdp1a880cjsn27592f23169f',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  

const handleFetch = () => {
 axios.request(options).then(function (response) {
    console.log(response.data);
    setCoin(response.data)
  }).catch(function (error) {
    console.error(error);
  });
}

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home 
        coin={coin}
        handleFetch={handleFetch}
        />}/>
        <Route path='/:id' element={<Showcoin/>}/>
        <Route path='/about' element={<About/>}/> 
        <Route path='/search' element={<Search/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
