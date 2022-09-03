import React from 'react'
import styles from '../styles/MovieDetails.module.scss'
// import Navbar from './Navbar'
export default function Details({movie}) {
    const producton = movie.production_companies;
const src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <div key={movie.id} className={styles.details}  style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }}>
      <div className={`d-flex flex-wrap ${styles.BoxContent}`}>
            <div className={`col-lg-4 col-12 ${styles.ImgBox}`}>
                <img src={src} title={movie.title} />
            </div>
            <div className={`col-lg-8 col-12 ${styles.ContentBox}`}>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <div className={styles.rating}>
                    <img src='/img/imdb.f7f2904f.png' width='50' height='24'/>
                    <span>{movie.vote_average}</span>
                    <img src='/img/star.9179862c.png' width='50' height='24'/>
                </div>
                <div className='row my-4 p-3'>
                    {
                        producton.map((item) => {
                            return(
                               <div className='col-sm-4 col-12' key={item.id}>
                                <div className={styles.ProducationImg}>
                                <img src={`https://image.tmdb.org/t/p/w500${item.logo_path}`}/> 
                                </div>
                                <h4>{item.name}</h4>
                               </div>
                            )
                        })
                    }
                </div>
            </div>
      </div>
  </div>
  )
}
