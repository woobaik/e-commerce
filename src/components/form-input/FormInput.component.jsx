import React, { Component } from "react"

class FormInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  render() {
    return (
      <div>
        <input
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.handleChange}
        />
      </div>
    )
  }
}

export default FormInput
