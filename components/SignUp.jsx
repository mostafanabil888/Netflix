import React from 'react'
import Link from 'next/link'
import styles from '../styles/SignUp.module.scss'
import Navbar from './Navbar'
export default function SignUp() {
  return (
    <div className={styles.SignUp}>
            <Navbar />
            <div className={`d-flex align-items-center justify-content-center ${styles.formbox}`}>
                <form>
                    <h1>Sign Up</h1>
                    <input type="text" placeholder='name'/>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <input type="password" placeholder='confirm'/>
                   <div className={styles.btn}>
                   <Link href='/'>Sign Up</Link>
                   </div>
                    <span>Already signed up?</span>
                    <Link href='/signin'>log iin now</Link>
                </form>
            </div>
        </div>
  )
}
