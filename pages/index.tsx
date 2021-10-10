import type { NextPage } from 'next'
import App from '../App/App'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../App/components/card'

const Home: NextPage = () => {
  const [statusList, setStatusList] = useState([])

  useEffect(() => {
    axios
      .get(`https://615dc1a912571a0017207885.mockapi.io/api/status`)
      .then((data) => {
        setStatusList(data.data)
      })
      .catch((error) => {
        console.log(error)
        return
      })
  }, [])

  return (
    <Provider store={store}>
      <App>
        <div className="home">
          {statusList &&
            statusList.map((status) => {
              return <Card status={status} />
            })}
        </div>
      </App>
    </Provider>
  )
}

export default Home
