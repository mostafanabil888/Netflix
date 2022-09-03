import React, { useEffect, useState } from "react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Row.module.scss'
import Image from 'next/image'
export default function Row({ url, title, input }) {

  const [movie,setmovie] = useState([])
  useEffect(() => {
   fetch(url)
     .then((request) => request.json())
     .then((actualdata) => {
      const data = actualdata.results;
     setmovie(data)
     })
 }, [])
const filteredData = movie.filter((item) => {
  if (input === "") {
      return item;
  
  }else{
       return item.title.toLowerCase().charAt(0).includes(input)
  }
})
  return (
    <section className={styles.Row}>

      <h2>{title}</h2>
      <Swiper
        slidesPerView={4.5}
        centeredSlides={false}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          992: {
            slidesPerView: 4.5,
          },
          768: {
            slidesPerView: 3,
          },
          500: {
            slidesPerView: 2,
            
          },
          0: {
            slidesPerView: 1,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {
       filteredData.map((item) => {
            return (
              <SwiperSlide className={styles.moviebox} key={item.id}>
                <div className={styles.imgbox}>
                <Image src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} width={700} height={800} alt={item.title} />
                </div>
                  <div className={styles.moviedetails}>
                   <h3>{item.title}</h3>
                    <p className="">{item.overview}</p>
                  </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
