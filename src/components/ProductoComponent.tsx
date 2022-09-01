import React from 'react'
import { Producto } from '../interfaces/producto'

interface ProductoProps{
    producto:Producto
}

export const ProductoComponent = ({producto}:ProductoProps) => {

  let {nombre,imagen,precio} = producto;

  return (
    
    <div className='producto-card'>

      <div className='producto-nombre'>
        <h2>{nombre}</h2>
      </div>

      <div className='prodcuto-imagen'>
        <img src={imagen} alt={`Imagen de ${nombre}`} />
      </div>

      <div className='prodcuto-precio'>
        <span>Precio: ${precio}</span>
      </div>

    </div>
  )
}
