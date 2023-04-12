import React from 'react'
import "../styles/Footer.css"
import githubLogo from "../images/github-mark.png"
import linkedInLogo from "../images/linkedin-mark.png"

export default function Footer() {
  return (
    <footer class="center-footer">
      <a target="_blank" rel="noreferrer" href="https://github.com/hfrancis7"><img class="footer-logo" src={githubLogo} alt="github logo which links to Hailey Francis's github profile"></img></a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hailey-francis-96907b185/"><img class="footer-logo" src={linkedInLogo} alt="linkdcin logo which links to Hailey Francis's linkedin profile"></img></a>
    </footer>
  )
}
