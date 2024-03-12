import React from 'react'
import projectStyles from '../styles/projects.module.css'
import image from './imgs/fakeshop.png'
import Gimage from './imgs/Screenshot 2023-10-07 192133.png'

const handleClick = (url) => {
  window.open(url, "_blank", "noopener,noreferrer")
}

export const Projects = () => {
  return (
    <>
        <h1 className={projectStyles.title}>My projects</h1>
        <div className={projectStyles.container}>
          <article className={projectStyles.card}>
            <img onClick={() => handleClick('https://lg026.github.io/fakeshop')} className={projectStyles.img} src={image} alt="fakeshop website"></img>
            <h2>Fakeshop</h2>
            <p className={projectStyles.desc}>Fakeshop is a pseudo ecommerce website that fetches and renders items from fakestoreapi.com with cart functionality <a className={projectStyles.link} href="https://lg026.github.io/fakeshop" target="_blank" rel='noopener noreferrer'>Click me</a> to see the website</p>
          </article>

          <article className={projectStyles.card}>
            <img onClick={() => handleClick("https://lg026.github.io/German200/")} className={projectStyles.img} src={Gimage} alt="German200 website"></img>
            <h2 className={projectStyles.gtitle}>German200</h2>
            <p className={projectStyles.desc}>This site quizzes you on the top 200 German words using a custom made <a className={projectStyles.link} href='https://languageapi-yne8.onrender.com/' target="_blank">API.</a> <a className={projectStyles.link} href="https://lg026.github.io/German200/" target='_blank' rel='noopener noreferrer'>Click here </a>to visit site</p>
          </article>
        </div>
    </>
  )
}

export default Projects
