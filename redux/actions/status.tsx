import * as status from '../constants/status'

export const getStatusRequest = (): status.StatusAction => {
  return { type: status.GET_STATUS_REQUEST, payload: null }
}

export const getStatusSuccess = (
  statusList: status.Status[]
): status.StatusAction => {
  return { type: status.GET_STATUS_SUCCESS, payload: statusList }
}
