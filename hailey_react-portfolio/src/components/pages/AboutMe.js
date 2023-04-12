import React from 'react'
import "../../styles/AboutMe.css"
import profilePic from "../../images/profilePic.png"
export default function AboutMe() {
  return (
    <div class="aboutme">
      <h1>About Me</h1>
      <img src={profilePic} class="profileImg" alt="Hailey Francis Profile Pic"></img>
      <p>I graduated in Spring 2022 from the University of North Florida with a degree in Computer Science and a Minor in Mathematics. I am currently enrolled in UCF's October 2022 Part-Time 24 Week Web Development bootcamp in an attempt to gain better professional skillset to succeed in the workforce. I am scheduled to graduate this program at the beginning of May 2023.</p> 
      <p>I'm a huge fan of video games and have been for most of my life, especially franchises like Pokémon, Fire Emblem, and Story of Seasons. In my free time, I've started learning about ROM hacking Generation III Pokémon Games, which has only furthered my interest in programming.</p> 
      <p>I'm hoping that my education through college, my computing-related hobbies, and and UCF's Bootcamp program will help me open doors to jobs in web development or software development.</p>
    </div>
  )
}
