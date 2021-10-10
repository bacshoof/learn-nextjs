import React from 'react'

type status = {
  createdAt: string
  id: string
  img: string
  like: number
  title: string
  user: string
}

type props = {
  status: status
}

function Card(props: props) {
  const { status } = props

  return <div>{status.user}</div>
}

export default Card
