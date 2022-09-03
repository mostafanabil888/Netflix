import Link from 'next/link'
import React from 'react'
import styles from '../styles/SignIn.module.scss'
import Navbar from './Navbar'
export default function SignIn() {
    return (
        <div className={styles.SignIn}>
            <Navbar />
            <div className={`d-flex align-items-center justify-content-center ${styles.formbox}`}>
                <form>
                    <h1>Sign Up</h1>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <div  className={styles.singup}>
                    <Link href='/'>Sign Up</Link>
                    </div>
                    <div className={styles.googlebtn}>
                    <Link href='https://www.google.com/' >Sign In With Google</Link>
                    </div>
                   <div className="text-center my-3">
                   <span>New to Netflix?</span>
                    <Link href='/signup'>Sign up now.</Link>
                   </div>
                </form>
            </div>
        </div>
    )
}
