import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="#" className="logo"><h1>MolinaShop</h1></a>

        <ul className="menu">
            <li><a className="menu-link" href="#">Inicio</a></li>
            <li><a className="menu-link" href="#">Nosotros</a></li>
            <li><a className="menu-link" href="#">Productos</a></li>
            <li><a className="menu-link" href="#">Contactos</a></li>
        </ul>
    </nav>
  )
}
