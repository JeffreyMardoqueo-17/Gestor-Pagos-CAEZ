import React from 'react'
import style from './Home.module.css'
import { Cards } from '../components/cards'
export default function home() {
    return (
        <div className={style.Home}>
            <Cards
                saldo={10010}
                titulo="saldo"
            ></Cards>

            <Cards
                saldo={50}
                titulo="Pendientes">
            </Cards>
            <Cards saldo={75}
                titulo="Pagados">
            </Cards>
        </div>
    )
}

//cosas que no se que son