import React from 'react'
import style from './cards.module.css'
/**
 * Este es un componente card, el cual debera tener un diseo predeterminado con parametros especificos que se brindaran desde las etiquetas como las porps
 */
export default function cards() {
    return (
        <div>
            <div className={style.CardsBox}>
                <div className={style.card}>
                    <div>
                        <div className={style.numbers}>1,504</div>
                        <div class={style.cardName}>Daily Views</div>
                    </div>
                    <div className={style.iconBx}>
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}