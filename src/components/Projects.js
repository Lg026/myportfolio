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
        {/* <h2 className={projectStyles.webTitle}>Fakeshop</h2>
        <p className={projectStyles.desc}>Fakeshop is a pseudo ecommerce website that fetches and renders items from <a href='https://fakestoreapi.com/' target='_blank'>fakestoreapi.com</a> with cart functionality <a href="https://lg026.github.io/fakeshop" target="_blank">Click me</a> to see the website</p>
        <img className={projectStyles.Fimg} src={image} alt="fakeshop website"></img>
        <h2 className={projectStyles.webTitle}>German200</h2>
        <p className={projectStyles.desc}>This website teaches and quizes you on the 200 most used words in German. It uses an <a href='https://languageapi-yne8.onrender.com/' target="_blank">API</a> that I made that has the German word, it's English equivalent, and sample sentences. <a href="https://lg026.github.io/German200/" target='_blank'>Click here</a></p>
        <img className={projectStyles.Gimg} src={Gimage} alt="German200 website"></img> */}
        <div className={projectStyles.container}>
          <article className={projectStyles.card}>
            <img onClick={() => handleClick('https://lg026.github.io/fakeshop')} className={projectStyles.Fimg} src={image} alt="fakeshop website"></img>
            <h2>Fakeshop</h2>
            <p className={projectStyles.desc}>Fakeshop is a pseudo ecommerce website that fetches and renders items from fakestoreapi.com with cart functionality <a className={projectStyles.link} href="https://lg026.github.io/fakeshop" target="_blank" rel='noopener noreferrer'>Click me</a> to see the website</p>
          </article>

          <article className={projectStyles.card}>
            <img onClick={() => handleClick("https://lg026.github.io/German200/")} className={projectStyles.Gimg} src={Gimage} alt="German200 website"></img>
            <h2>German200</h2>
            <p className={projectStyles.desc}>This website teaches and quizes you on the 200 most used words in German. It uses an <a className={projectStyles.link} href='https://languageapi-yne8.onrender.com/' target="_blank">API</a> that I made that has the German word, it's English equivalent, and sample sentences. <a className={projectStyles.link} href="https://lg026.github.io/German200/" target='_blank' rel='noopener noreferrer'>Click here</a></p>
          </article>
        </div>
    </>
  )
}

export default Projects
