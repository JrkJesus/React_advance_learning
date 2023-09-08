import React, { useState } from 'react'
import { LoginContainer } from './StyledComponent'

interface IUserInfo {
  userName: String,
  password: String
}

const LoginPage: React.FC = () => {

  const [userInfo, setUserInfo] = useState<IUserInfo>({
    userName: '',
    password: ''
  })

  const handleUserInfoOnChange = (event: React.ChangeEvent<HTMLInputElement>, attr: PropertyKey) => {

    const userInfoToChange = Object.defineProperty({...userInfo}, attr, {value: event.target.value})
    setUserInfo(userInfoToChange)
  }

  return (
    <LoginContainer>
      LOGIN
      <input type='text' onChange={(event) => handleUserInfoOnChange(event, 'userName')}/>
      <input type='password' onChange={(event) => handleUserInfoOnChange(event, 'password')} />
      <button onClick={() => console.log({userInfo})}>Log in</button>
    </LoginContainer>
  )
}

export default LoginPage