import React from 'react'
import "../../styles/Portfolio.css"
import ReciBEET from "../../images/recibeet.jpg"
import BeatsEats from "../../images/BeatsEats.png"
import TechBlog from "../../images/TechBlog.jpg"
import WeatherDashboard from "../../images/WeatherDashboard.jpg"
import CodingQuiz from "../../images/CodingQuiz.jpg"
import prework from "../../images/prework.png"
import githublogo from "../../images/github-mark-white.png"

export default function Portfolio() {
  return (
    <div class="portfolio">
      <h1>Portfolio</h1>

      <div class="portfolio-flex-wrap">

        <div class="flex-wrap-item">
          <figure class="container">
            <img src={ReciBEET} alt="ReciBEET" class="image"></img>
            <div class="middle">
              <div class="text text-success">
                <a class="text" href="https://recibeet-2.herokuapp.com/" target="_blank" rel="noreferrer">ReciBEET</a>
                <a href="https://github.com/torresorona/ReciBEET" target="_blank" rel="noreferrer">
                  <img src={githublogo} alt="github logo" class="github-icon"></img>
                </a>
                </div> 
            </div>
          </figure>
        </div>

        <div class="flex-wrap-item">
          <figure class="container">
            <img src={BeatsEats} alt="Beats And Eats" class="image"></img>
            <div class="middle">
              <div class="text">
                <a class="text" href="https://shobannah.github.io/BeatsAndEats/" target="_blank" rel="noreferrer">Beats & Eats</a>
                <a href="https://github.com/shobannah/BeatsAndEats" target="_blank" rel="noreferrer">
                  <img src={githublogo} alt="github logo" class="github-icon"></img>
                </a>
                </div> 
            </div>
          </figure>
        </div>

        <div class="flex-wrap-item">
          <figure class="container">
            <img src={TechBlog} alt="Tech Blog" class="image"></img>
            <div class="middle">
              <div class="text">
                <a class="text" href="https://haileyf-techblog-app.herokuapp.com/" target="_blank" rel="noreferrer">Tech Blog</a>
                <a href="https://github.com/hfrancis7/Module14Challenge-TechBlog" target="_blank" rel="noreferrer">
                  <img src={githublogo} alt="github logo" class="github-icon"></img>
                </a>
                </div> 
            </div>
          </figure>
        </div>

        <div class="flex-wrap-item">
          <figure class="container">
            <img src={WeatherDashboard} alt="Weather Dashboard" class="image"></img>
            <div class="middle">
              <div class="text">
                <a class="text" href="https://hfrancis7.github.io/Module6-WeatherDashboard/" target="_blank" rel="noreferrer">Weather Dashboard</a>
                <a href="https://github.com/hfrancis7/Module6-WeatherDashboard" target="_blank" rel="noreferrer">
                  <img src={githublogo} alt="github logo" class="github-icon"></img>
                </a>
                </div> 
            </div>
          </figure>
        </div>

        <div class="flex-wrap-item">
          <figure class="container">
            <img src={CodingQuiz} alt="Coding Quiz" class="image"></img>
            <div class="middle">
              <div class="text">
                <a class="text" href="https://hfrancis7.github.io/Module4Challenge-CodingQuiz/" target="_blank" rel="noreferrer">Coding Quiz</a>
                <a href="https://github.com/hfrancis7/Module4Challenge-CodingQuiz" target="_blank" rel="noreferrer">
                  <img src={githublogo} alt="github logo" class="github-icon"></img>
                </a>
                </div> 
            </div>
          </figure>
        </div>

        <div class="flex-wrap-item">
          <figure class="container">
            <img src={prework} alt="Prework Study Guide" class="image"></img>
            <div class="middle">
              <div class="text">
                <a class="text" href="https://hfrancis7.github.io/prework-study-guide/" target="_blank" rel="noreferrer">Prework Study Guide</a>
                <a href="https://github.com/hfrancis7/prework-study-guide" target="_blank" rel="noreferrer">
                  <img src={githublogo} alt="github logo" class="github-icon"></img>
                </a>
                </div> 
            </div>
          </figure>
        </div>
        
      </div>

    </div>
  )
}
