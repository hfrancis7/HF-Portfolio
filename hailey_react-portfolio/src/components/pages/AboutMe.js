import React from 'react'
import "../../styles/AboutMe.css"
import "../../styles/Headings.css"
import profilePic from "../../images/profilePic.png"

export default function AboutMe() {
  return (
    <div class="aboutme">
      <h1 class="heading">About Me</h1>
      <img src={profilePic} class="profileImg" alt="Hailey Francis Profile Pic"></img>
      <p>Hi, I'm Hailey! I'm passionate about developing solutions using my knowledge of development methodoligies such as Agile. I have experience operating in both a classic web development environment as well as ServiceNow's platform environment. </p> 
      <p>I have a strong attention to detail, and love exploring every avenue to find the best possible solutions. I also love being able to create solutions that have the ability to help people achieve what they want to accomplish: if I'm able to do that, then I feel accomplished, too.</p>
      <p>I have the most experience with JavaScript, using technologies such as REACT, Bootstrap, Node, Express, and Angular. These are just a handful of examples of the types of technologies I've used before, and I'm always learning more. </p>
      <p>I'm also a child at heart, as you can see from my portfolio's color scheme and the Pikachu on top of the page. The ability to show who I am through this page is another feature I find empowering in development, and it gives me the confidence and experience in what I'm capable of creating.</p>
    </div>
  )
}
