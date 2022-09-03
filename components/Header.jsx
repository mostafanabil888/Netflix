import React, { useState,useEffect } from 'react'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'
import { Navigation,} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Header({data,url}) {
  const [movies,setmovies] = useState([])
  useEffect(() => {
   setmovies(data)
 }, [])
  return (
    <header className={styles.Header}>
      <Swiper className={`mySwiper ${styles.Swiper}`} navigation={true} modules={[Navigation]}>
     
         {
            movies.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Link href={`${url}/${item.id}`}>
                        <a>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}/>
                        <div className={styles.boxdetails}>
                          <h2>{item.title}</h2>
                          <p>{item.overview}</p>
                        </div>
                        </a>
                      </Link>
                  </SwiperSlide>
                )
            })
         }
      </Swiper>
    </header>
  )
}
