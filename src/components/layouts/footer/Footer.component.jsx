import React from "react"
import "./Footer.styles.scss"
import CopyrightIcon from "@material-ui/icons/Copyright"
import Icon from "@material-ui/core/Icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <FontAwesomeIcon icon={faCopyright} />
        Joungwoo Baik All Rights Reserved
      </div>
      <div>
        <a
          className='footer-link'
          href='https://www.github.com/woobaik'
          target='_blank'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className='footer-link' href='https://www.linkedin.com/in/baik/.'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  )
}

export default Footer
