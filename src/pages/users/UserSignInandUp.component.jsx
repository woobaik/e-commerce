import React from "react"
import "./UserSignInandUp.styles.scss"

import SignIn from "../../components/users/user-sign-in/SignIn.component.jsx"
import SignUp from "../../components/users/user-sign-up/SignUp.component"

function UserSignInandUp() {
  return (
    <div className='user-sign-in-and-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default UserSignInandUp
