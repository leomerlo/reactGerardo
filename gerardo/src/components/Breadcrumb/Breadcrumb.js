import React from 'react'
import { Link } from 'react-router-dom'

// TODO Agregar logica para reconocer el path

const BreadCrumb = ({ name }) => {
  return (
    <ul className="flex">
        <li className="mx-1"><Link to="/">Home</Link></li>
        <li className="mx-1">></li>
        <li className="mx-1">{ name }</li>
    </ul>
  )
}

export default BreadCrumb