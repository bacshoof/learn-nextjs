import React from 'react'
import App from '../../App/App'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

function Notification() {
  return (
    <Provider store={store}>
      <App>
        <div>Under Construction</div>
      </App>
    </Provider>
  )
}

export default Notification
