import React from 'react'

// TODO Agregar logica para reconocer el path

const BreadCrumb = ({ name }) => {
  return (
    <ul className="flex">
        <li className="mx-1">Home</li>
        <li className="mx-1">></li>
        <li className="mx-1">{ name }</li>
    </ul>
  )
}

export default BreadCrumb