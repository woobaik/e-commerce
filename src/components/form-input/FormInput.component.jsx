import React, { Component } from "react"
import "./FormInput.styles.scss"

class FormInput extends Component {
  render() {
    return (
      <div className='form-group'>
        <input
          className='form-input'
          type={this.props.type}
          name={this.props.name}
          id={this.props.label}
          onChange={this.props.handleChange}
        />

        <label
          htmlFor={this.props.label}
          className={this.props.value ? "shrinked" : ""}
        >
          {this.props.name.toUpperCase()}
        </label>
      </div>
    )
  }
}

export default FormInput
