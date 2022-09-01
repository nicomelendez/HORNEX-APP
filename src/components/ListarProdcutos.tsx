import React from 'react'
import { Producto } from '../interfaces/producto'
import { ProductoComponent } from './ProductoComponent'

interface ListaDeProductosProps{
    productos:Producto[];
}
export const ListarProdcutos = ({productos}:ListaDeProductosProps) => {

  return (

    <div className='lista-de-prodcutos'>
        {
            productos.map(producto=>{

                return(
                    <ProductoComponent key={producto.id} producto={producto}/>
                )

            })
        }
    </div>

  )
}
