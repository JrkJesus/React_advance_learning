import React, { useState } from 'react'
import { LoginContainer } from './StyledComponent'
import useLoginForm from 'renderer/Hooks/useLoginForm'

const LoginPage: React.FC = () => {

  const {userInfo, changeUserName, changePassword} = useLoginForm()

  return (
    <LoginContainer>
      LOGIN
      <input type='text' onChange={(event) => changeUserName(event.target.value)}/>
      <input type='password' onChange={(event) => changePassword(event.target.value)} />
      <button onClick={() => console.log({userInfo})}>Log in</button>
    </LoginContainer>
  )
}

export default LoginPage