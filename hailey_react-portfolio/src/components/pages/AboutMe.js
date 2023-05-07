import React from 'react'
import "../../styles/AboutMe.css"
import "../../styles/Headings.css"
import profilePic from "../../images/profilePic.png"

export default function AboutMe() {
  return (
    <div class="aboutme">
      <h1 class="heading">About Me</h1>
      <img src={profilePic} class="profileImg" alt="Hailey Francis Profile Pic"></img>
      <p>I graduated in Spring 2022 from the University of North Florida (UNF) with a degree in Computer Science and a minor in Mathematics. I've also recently graduated the University of Central Florida's (UCF) October 2022 24-week Web Development bootcamp in May 2023. I went through this program to gain better professional skillset to succeed in the workforce.</p> 
      <p>I am a quick learner with a strong attention to detail. My most recent experience has been with HTML,CSS, and Javascript, especially with Node.js. I have experience with the full MERNG stack, as well as mySQL and designing relational databases. I also have experience working with Java, Python, and C, with exposure to computing concepts such as data structures, networking practices, and AI.</p>
      <p>I'm confident that my education through college, my computing-related hobbies, and and UCF's Bootcamp program will help me open doors to jobs in web development and software development.</p>
      <p>This website is a single-page website built with REACT, and utilizes conditional rendering to switch between components based on what's selected in the Navigation Bar.</p>
    </div>
  )
}
