import { AcercaDe } from "../components/AcercaDe";
import { Catalogo } from "../components/Catalogo";
import { Home } from "../components/Home";

type JSXComponent = () => JSX.Element;

interface Route{
    to:string;
    path:string;
    Component:JSXComponent;
    name:string;
}

export const routes:Route[] = [
    {
        to:'/home',
        path:'/home',
        Component:Home,
        name:'Inicio'
    },
    {
        to:'/catalogo',
        path:'/catalogo',
        Component:Catalogo,
        name:'Productos'
    },
    {
        to:'/acerca-de',
        path:'/acerca-de',
        Component:AcercaDe,
        name:'Acerca De'
    }
]