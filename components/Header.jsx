import React, { useState, useEffect } from 'react'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'
import { Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Header({ data, url }) {
  const [movies, setmovies] = useState([])
  useEffect(() => {
    setmovies(data)
  }, [])
  return (
    <header className={styles.Header}>
     
      <Swiper className={`mySwiper ${styles.Swiper}`} navigation={true} modules={[Navigation]}>
        {
          movies.map((item) => {
            return (
              <SwiperSlide  key={item.id} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.poster_path})` }}>
                <Link href={`${url}/${item.id}`}>      
                  <a>
                    <div className={styles.boxdetails}>
                      <div className='px-md-5'>
                        <h2>{item.title}</h2>
                        <p>{item.overview}</p>
                      </div>
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
