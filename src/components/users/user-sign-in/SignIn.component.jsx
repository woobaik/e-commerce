import React, { Component } from "react"
import FormInput from "../../form-input/FormInput.component"
import Button from "../../button/Button.component.jsx"

import "./SignIn.styles.scss"

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ email: "", password: "" })
  }
  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
    console.log(this.state)
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className=''>Already Have An Account? </h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
          />

          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
          />

          <Button buttonType='sign-in-btn'>Sign In</Button>
        </form>
      </div>
    )
  }
}

export default SignIn
