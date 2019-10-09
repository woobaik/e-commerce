import React from "react"
import "./Button.styles.scss"

function Button(props) {
  return (
    <button className={`button ${props.buttonType}`}>{props.children}</button>
  )
}

export default Button
