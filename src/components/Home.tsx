import React from 'react'
import { ListaDeProductos } from '../productos/listaDeProductos'
import { ListarProdcutos } from './ListarProdcutos'

export const Home = () => {

  return (
    <div className='home-component'>

      <div className='home-title'>
        <h2>Binvenido a HORNEX-APP</h2>
      </div>

      <div className='home-descripction'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus iusto, expedita voluptatem, praesentium, temporibus est obcaecati laudantium quasi odio laboriosam vitae tempore? Tempore ipsam nulla amet ducimus. Illum, aliquid.</p>
      </div>
      
      <div className='home-productos-m-vendidos'>

        <h3>Productos más vendidos</h3>

        <ListarProdcutos productos={ListaDeProductos}/>

      </div>

    </div>
  )
}
