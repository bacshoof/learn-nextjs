import { fetchStatus } from '../../API/status'
import * as status from '../constants/status'

export const statusReducer = (
  state: status.Status[] = [],
  action: status.StatusAction
) => {
  switch (action.type) {
    case status.GET_STATUS_REQUEST: {
      fetchStatus()
    }
    case status.GET_STATUS_SUCCESS: {
      const state = action.payload
      return state
    }
    default:
      return state
  }
}
