import { Producto } from "../interfaces/producto";
import vainillaLiquida from '../assets/vainillaLiquida.jpg';
import gelatina from '../assets/gelatinacerezas.jpg';
import flanDeVainilla from '../assets/flanvainilla.jpg'

export const ListaDeProductos:Producto[] = [

    {
        id:1,
        nombre:'Gelatina',
        precio:200,
        imagen:gelatina
    },

    {
        id:2,
        nombre:'Vainilla Liquida',
        precio:300,
        imagen:vainillaLiquida
    },

    {
        id:3,
        nombre:'Flan de vainilla',
        precio:400,
        imagen:flanDeVainilla
    }

]