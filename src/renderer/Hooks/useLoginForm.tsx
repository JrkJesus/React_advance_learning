import React, { useState } from 'react'

interface IUserInfo {
  userName: String,
  password: String
}

const useLoginForm = () => {

  const [userInfo, setUserInfo] = useState<IUserInfo>({
    userName: '',
    password: ''
  })

  const changeUserName = (name: String) => {
    setUserInfo({...userInfo, userName: name})
  }

  const changePasssword = (password: String) => {
    setUserInfo({...userInfo, password: password})
  }


  return {
    userInfo,
    changeUserName,
    changePasssword
  }
}

export default useLoginForm