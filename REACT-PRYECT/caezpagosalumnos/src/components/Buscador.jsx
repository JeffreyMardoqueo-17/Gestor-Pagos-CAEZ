import React from 'react';
import '../components/Buscador.css'
//icono de busqueda
import { FaSearch } from "react-icons/fa";
const Buscador = () => {
    return (
        <div className="topbar">
            <div className="toggle">
                <ion-icon name="menu-outline"></ion-icon>
            </div>

            <div className="search">
                <label>
                    <input type="text" placeholder="Buscar Alumno" />
                    <FaSearch className='icon' />
                </label>
            </div>

            <div className="user">
                <img src="/IMG/peer.png" alt="Perfil icono" />
            </div>
        </div>
    );
}

export default Buscador;
