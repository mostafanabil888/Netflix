import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss' 
import { GiToggles} from 'react-icons//gi'
export default function Navbar( {inputHandler} ) {
  return (
    <div className={styles.Navbar}>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand text-center" href="#"><img src='/img/logo.a1f673e7.png' width='120' height='80' /></a>
        <button className={`navbar-toggler ${styles.NavIcon}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><GiToggles /></span>
        </button>
        <div className={`collapse navbar-collapse  ${styles.collapse}`} id="navbarSupportedContent">
          <ul className={`navbar-nav   me-auto mb-2 col-lg-7  col-12 mb-lg-0 ${styles.nav}`}>
            <li className="nav-item mt-4 mt-lg-0">
              <Link className="nav-link" aria-current="page" href="/">Movies</Link>
            </li>
            <li className="nav-item mt-4 mt-lg-0">
              <Link className="nav-link" href="tvshows">TV Shows</Link>
            </li>
            <li className="nav-item mt-4 mt-lg-0 d-inline d-lg-none">
              <Link className="nav-link" href="signin">sign in</Link>
            </li>
          </ul>

        </div>
       <div className={`d-flex  col-lg-5 col-12 ${styles.searchbox}`}>
       <div className="d-flex m-auto m-lg-0" role="search">
          <input onChange={inputHandler} className="form-control me-2" type="search" placeholder="Movies, TV Shows" aria-label="Search" />
        </div>
       <div className="d-none  d-lg-inline">
       <Link  href='/signup'>sign in</Link>
       <Link  href='/signup'>log in</Link>
       </div>
       </div>
      </nav>
    </div>
  )
}
