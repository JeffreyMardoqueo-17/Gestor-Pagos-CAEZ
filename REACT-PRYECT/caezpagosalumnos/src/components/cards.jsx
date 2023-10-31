import React from 'react'
import style from './cards.module.css'
/**
 * Este es un componente card, el cual debera tener un diseo predeterminado con parametros especificos que se brindaran desde las etiquetas como las porps
 */

export const Cards = (props) => {
    return (
        <div>
            <div className={style.CardBox}>
                <div className={style.card}>
                    <div>
                        <div className={style.numbers}>{props.saldo}</div>
                        <div class={style.cardName}>{props.titulo}</div>
                    </div>
                    <div className={style.iconBx}>
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}
