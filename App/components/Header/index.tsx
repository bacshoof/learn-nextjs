import React, { useState } from 'react'
import Link from 'next/link'
import Auth from '../auth'

function Header() {
  const [authTitle, setAuthTitle] = useState('Login')
  const [isAuth, setIsAuth] = useState(false)

  const handleIsAuth = (
    isAuthNew: boolean = !isAuth,
    title: string = authTitle
  ): void => {
    setIsAuth(isAuthNew)
    setAuthTitle(title)
  }

  return (
    <div className="header">
      <div className="header__title">FOR YOU</div>

      <div className="header__navbar">
        <Link href="/">
          <span className="header__navbar--home">Home</span>
        </Link>
        <Link href="/notification">
          <span className="header__navbar--notification">Notification</span>
        </Link>
      </div>

      <div className="header__user">
        <span
          className="header__user--login"
          onClick={() => handleIsAuth(true, 'Login')}
        >
          Login
        </span>{' '}
        |{' '}
        <span
          className="header__user--register"
          onClick={() => handleIsAuth(true, 'Register')}
        >
          Register
        </span>
      </div>

      <Auth
        isAuth={isAuth}
        authTitle={authTitle}
        handleIsAuth={handleIsAuth}
      ></Auth>
    </div>
  )
}

export default Header
