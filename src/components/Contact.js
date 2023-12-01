import React from 'react'
import contactStyles from '../styles/contact.module.css'

export const Contact = () => {
  return (
    <>
        <h1 className={contactStyles.title}>Contact me</h1>
        <h2 className={contactStyles.info}>Info</h2>
        <p className={contactStyles.p}>Email: <a href="mailto:Guzman.lg22@Gmail.com" target='_blank' rel='noopener noreferrer'>Guzman.lg22@Gmail.com</a></p>
        <p className={contactStyles.p}>Phone number: 909-808-9954</p>
        <p className={contactStyles.p}><a href="https://github.com/Lg026" target='_blank' rel='noopener noreferrer'>Github</a></p>
    </>
  )
}

export default Contact

