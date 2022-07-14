import React from 'react'
import loading from '../../assets/loading.svg';

const Loading = () => {
  return (
    <div>
        <object className="mx-auto my-8 w-32" data={ loading } type="image/svg+xml" aria-label="Cargando Datos" />
    </div>
  )
}

export default Loading