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
        </div>
    )
}


//cosas que no se que son