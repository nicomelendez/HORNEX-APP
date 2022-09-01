import React from 'react'
import { ListarProdcutos } from './ListarProdcutos'
import { ListaDeProductos } from '../productos/listaDeProductos'
export const Catalogo = () => {
  return (
    <div className='catalogo-component'>
      <div className='catalogo-title'>
        <h2>Catalogo</h2>
      </div>
      <div className='catalogo-buscar'>
        <label>
          Buscar
        </label>
        <input type="text"/>
        <button>Buscar</button>
      </div>

      <ListarProdcutos productos={ListaDeProductos}/>

    </div>
  )
}
