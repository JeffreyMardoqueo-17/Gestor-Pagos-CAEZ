import React from 'react';
import '../components/Buscador.css'
const Buscador = () => {
    return (
        <div class="search">
            <label>
                <input type="text" placeholder="Search here" />
                <ion-icon name="search-outline"></ion-icon>
            </label>
        </div>
    );
}

export default Buscador;
