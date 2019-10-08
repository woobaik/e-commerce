import React, { Component } from "react"
import FormInput from "../../form-input/FormInput.component"

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
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
          />
        </form>
      </div>
    )
  }
}

export default SignIn
