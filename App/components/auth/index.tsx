import React from 'react'

type props = {
  authTitle: string
  handleIsAuth: Function
  isAuth: boolean
}

function Auth(props: props) {
  const { authTitle, handleIsAuth, isAuth } = props

  return (
    <div className={`auth ${isAuth ? 'auth-on' : 'auth-off'}`}>
      <div
        className={`auth__overlay ${isAuth && 'auth__overlay-on'}`}
        onClick={() => handleIsAuth()}
      ></div>
      <div className={`auth__body ${isAuth && 'auth__body-on'}`}>
        <div className="auth__body__x" onClick={() => handleIsAuth()}>
          x
        </div>
        <div className="auth__body__title">{authTitle}</div>

        <div className="auth__body__form">
          <label className="auth__body__form--label" htmlFor="username">
            Username
          </label>
          <input
            className="auth__body__form--input"
            id="username"
            type="text"
            placeholder="Your email..."
          />
        </div>

        <div className="auth__body__form">
          <label className="auth__body__form--label" htmlFor="password">
            Password
          </label>
          <input
            className="auth__body__form--input"
            id="password"
            type="password"
            placeholder="password..."
          />
        </div>

        {authTitle === 'Register' && (
          <div className="auth__body__form">
            <label className="auth__body__form--label" htmlFor="password">
              Confirm Password
            </label>
            <input
              className="auth__body__form--input"
              id="password"
              type="password"
              placeholder="password..."
            />
          </div>
        )}

        <button className="auth__body__submit" type="submit">
          Submit
        </button>

        <div className="auth__body__change">
          <div
            className={`auth__body__change--text ${
              authTitle === 'Login' && 'auth__body__change--text-on'
            }`}
            onClick={() => handleIsAuth(true, 'Login')}
          >
            Login
          </div>
          <div
            className={`auth__body__change--text ${
              authTitle === 'Register' && 'auth__body__change--text-on'
            }`}
            onClick={() => handleIsAuth(true, 'Register')}
          >
            Register
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
