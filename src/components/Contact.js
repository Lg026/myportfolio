import React from 'react'
import contactStyles from '../styles/contact.module.css'

const handleClick = (url) => {
  window.open(url, "_blank", "noopener,noreferrer")
}

export const Contact = () => {
  return (
    <>
        <h1 className={contactStyles.title}>Contact me</h1>
        <div className={contactStyles.container}>
          <div onClick={() => handleClick('mailto:Guzman.lg22@Gmail.com')} className={contactStyles.block}>
            <p className={contactStyles.p}>Email: <a className={contactStyles.links} href="mailto:Guzman.lg22@Gmail.com" target='_blank' rel='noopener noreferrer'>Guzman.lg22@Gmail.com</a></p>
          </div>
          <div onClick={() => handleClick('https://github.com/Lg026')} className={contactStyles.block}>
            <p className={contactStyles.p}><a className={contactStyles.links} href="https://github.com/Lg026" target='_blank' rel='noopener noreferrer'>Github</a></p>
          </div>
          <div className={contactStyles.block}>
            <p className={contactStyles.p}>Phone number: 909-808-9954</p>
          </div>
        </div>
    </>
  )
}

export default Contact

