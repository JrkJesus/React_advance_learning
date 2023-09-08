import React, { useState } from 'react'
import { LoginContainer } from './StyledComponent'

const LoginPage: React.FC = () => {
  
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleUserNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }

  const handlePasswordOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <LoginContainer>
      LOGIN
      <input type='text' onChange={handleUserNameOnChange}/>
      <input type='password' onChange={handlePasswordOnChange} />
      <button>Log in</button>
    </LoginContainer>
  )
}

export default LoginPage