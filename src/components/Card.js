import React from 'react'
import projectStyles from '../styles/projects.module.css'

const Card = ({ title, description, imgSrc, url }) => {

    const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
  <article onClick={() => handleClick({url})} className={projectStyles.card}>
    <img className={projectStyles.img} src={imgSrc} alt={title}></img>
    <h2>{title}</h2>
    <p className={projectStyles.desc}>{description}</p>
    </article>
  )
}

export default Card