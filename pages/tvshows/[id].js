import React from 'react'
import axios from "axios";
import { server } from "../../config/index";
import Details from '../../components/Details';
export default function datails({movie}) {
  console.log(movie);
  return (
      <Details movie={movie} />
  )
}



export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(`${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movie = res.data;

  return {
    props: { movie }
  }
}

export async function getStaticPaths() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data.results;

  const ids = movies.map(movie => movie.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  }
}
