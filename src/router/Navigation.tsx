import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'
import { routes } from './routes'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>

            <Nav/>

            <section className='contenido'>
                <Routes>
                    {
                        routes.map(({to,path,Component})=>{
                            return(
                                <Route  key={to}
                                        path={path}
                                        element={<Component/>}
                                />
                            )
                        })
                    }
                    <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
                </Routes>
            </section>

            <Footer/>
        </div>
    </BrowserRouter>
  )
}
