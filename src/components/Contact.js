import React from 'react'
import contactStyles from '../styles/contact.module.css'

export const Contact = () => {
  return (
    <>
        <h1 className={contactStyles.title}>Contact me</h1>
        <div className={contactStyles.contactContainer}>
          <p className={contactStyles.p}>Email: <a className={contactStyles.links} href="mailto:Guzman.lg22@Gmail.com" target='_blank' rel='noopener noreferrer'>Guzman.lg22@Gmail.com</a></p>
          <p className={contactStyles.p}>Github: <a className={contactStyles.links} href="https://github.com/Lg026" target='_blank' rel='noopener noreferrer'>Lg026</a></p>
          <p className={contactStyles.p}>Phone number: <a className={contactStyles.links} href='tel:909-808-9954'>909-808-9954</a></p>
        </div>
    </>
  )
}

export default Contact



