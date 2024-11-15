import React from 'react'
import projectStyles from '../styles/projects.module.css'
import image from './imgs/fakeshop.png'
import Gimage from './imgs/Screenshot 2023-10-07 192133.png'
import Aimage from './imgs/tomeimg.png'
import Card from './Card'

export const Projects = () => {
  return (
    <>
        <h1 className={projectStyles.title}>My projects</h1>
        <div className={projectStyles.container}>
          <Card title='Fakeshop' description='Fakeshop is a pseudo ecommerce website with cart functionality.' imgSrc={image} url='https://lg026.github.io/fakeshop' />

          <Card title='German200' description='This site quizzes you on the top 200 German words using a custom made API.' imgSrc={Gimage} 
            url='https://lg026.github.io/German200/' 
          />

          <Card title='Anime Tome' description='A full stack Django/React CRUD anime list style website complete with login and register' imgSrc={Aimage} url='https://github.com/Lg026/Anime_Tome'/>
        </div>
    </>
  )
}

export default Projects

