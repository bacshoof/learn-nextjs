export const GET_STATUS_REQUEST = 'getStatusRequest'
export type GET_STATUS_REQUEST_type = typeof GET_STATUS_REQUEST

export const GET_STATUS_SUCCESS = 'getStatusSuccess'
export type GET_STATUS_SUCCESS_type = typeof GET_STATUS_SUCCESS

export interface Status {
  createdAt: string
  title: string
  img: string
  user: string
  like: number
  id: string
}

export interface StatusAction {
  type: GET_STATUS_REQUEST_type | GET_STATUS_SUCCESS_type
  payload: Status[] | null
}
