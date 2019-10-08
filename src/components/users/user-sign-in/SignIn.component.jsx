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

  handleChange = event => {
    console.log(event.target)
    const { name, value } = event.target
    console.log(name)
  }
  render() {
    return (
      <div className='sign-in'>
        <form>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default SignIn
