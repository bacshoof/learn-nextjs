import axios from 'axios'
import { getStatusSuccess } from '../redux/actions/status'
import { store } from '../redux/store'

const URL = 'https://615dc1a912571a0017207885.mockapi.io/api'

export const fetchStatus = () => {
  axios
    .get(`${URL}/status`)
    .then((data) => {
      store.dispatch(getStatusSuccess(data.data))
      return
    })
    .catch((error) => {
      console.log(error)
      return
    })
}
