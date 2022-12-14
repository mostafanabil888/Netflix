import React, { useState } from 'react'
import Head from 'next/head'
import axios from "axios";
import Header from '../components/Header.jsx'
import { server } from '../config/index.js';
import Navbar from '../components/Navbar.jsx'
import Row from '../components/Row.jsx';
import requests from '../requests/requesthome'
import Footer from '../components/Footer.jsx';
export default function Home({popular}) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
   return (
    <div>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/logo.a1f673e7.png" />
      </Head>
      <div>
        <Navbar inputHandler={inputHandler}/>
        <Header url={''} data={popular.results}/>      
        <Row title={"TopRated"} input={inputText} url={requests.requestTopRated}/>
        <Row title={"Trending"} input={inputText} url={requests.requestTrending}/>
        <Row title={"Popular"} input={inputText} url={requests.requestPopular}/>
        <Row title={"Horror"} input={inputText} url={requests.requestHorror}/>
        <Row title={"Upcoming"} input={inputText}  url={requests.requestUpcoming}/>
        <Footer />
      </div>
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