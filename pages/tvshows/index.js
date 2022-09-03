import Link from 'next/link'
import React, { useState } from 'react'
import requesttv from '../../requests/requesttv.JS'
import Header from '../../components/Header.jsx'
import { server } from "../../config/index";
import axios from "axios";
import Row from '../../components/Row';
import Navbar  from '../../components/Navbar';
export default function index( {popular}) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div>
      <Navbar inputHandler={inputHandler}/>
      <Header url={'/tvshows'} data={popular.results}/>
      <Row url={requesttv.fetchNetflixOriginals} input={inputText} title={"Netflix Originals"} />
      <Row url={requesttv.fetchRomanceMovies} input={inputText} title={"Romance Movies"} /> 
      <Row url={requesttv.fetchTopRated} input={inputText} title={"Top Rated"} /> 
      <Row url={requesttv.fetchActionMovies} input={inputText} title={"Action Movies"} />
       <Row url={requesttv.fetchComedyMovies} input={inputText} title={"Comedy Movies"} />
      <Row url={requesttv.fetchDocumentaries} input={inputText} title={"Horror Movies"} />
    </div>
  )
}


export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;

  return {
    props: { 
      popular : movies,
    }
  }
}