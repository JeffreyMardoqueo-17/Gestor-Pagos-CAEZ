import React from 'react'
import style from './Home.module.css'
import cards from '../components/cards'
export default function home() {
    return (
        <div className={style.Home}>
            <cards></cards>
        </div>
    )
}
