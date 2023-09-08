import React, { useState } from 'react'

interface IUserInfo {
  userName: String,
  password: String
}

interface IUserLoginForm {
  userInfo: IUserInfo,
  changeUserName(name: String): void,
  changePassword(password: String): void
}

const defaultValue: IUserInfo = {
  userName: '',
  password: ''
}

const useLoginForm = (initialValue: IUserInfo = defaultValue): IUserLoginForm => {

  const [userInfo, setUserInfo] = useState<IUserInfo>(initialValue)

  const changeUserName = (name: String) => {
    setUserInfo({...userInfo, userName: name})
  }

  const changePassword = (password: String) => {
    setUserInfo({...userInfo, password: password})
  }


  return {
    userInfo,
    changeUserName,
    changePassword
  }
}

export default useLoginForm