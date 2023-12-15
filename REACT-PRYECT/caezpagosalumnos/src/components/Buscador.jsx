import React from 'react';
import '../components/Buscador.css'
const Buscador = () => {
    return (
        <div className="topbar">
            <div className="toggle">
                <ion-icon name="menu-outline"></ion-icon>
            </div>

            <div className="search">
                <label>
                    <input type="text" placeholder="Buscar Alumno" />
                        <ion-icon name="search-outline"></ion-icon>
                </label>
            </div>

            <div className="user">
                <img src="/IMG/peer.png" alt="Perfil icono" />
            </div>
        </div>
    );
}

export default Buscador;
