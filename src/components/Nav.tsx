import { NavLink } from "react-router-dom"
import { routes } from "../router/routes"

import logo from '../assets/logo.png';

export const Nav = () => {
  return (
    <nav className="menu-component">
        
        <div className="logo-component">
            <NavLink to='/home'>
                <img className="imagen" src={logo} alt='Logo de Hornex'/>
            </NavLink>
        </div>

        <ul className="menu-content">
            {
                routes.map(({to,name})=>{
                    return(
                        <li key={to}>
                            <NavLink className={({isActive})=> isActive ? 'nav-active':''}  to={to}>
                                {name}
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    </nav>
  )
}
