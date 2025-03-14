import React from 'react'
import { Helmet } from "react-helmet"

const Title = ({
    title="chat app",
    description = "i am the god of thunder"}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
    </Helmet>
  )
}

export default Title