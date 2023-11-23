import React from 'react'
import style from './cards.module.css'
/**
 * Este es un componente card, el cual debera tener un diseo predeterminado con parametros especificos que se brindaran desde las etiquetas como las porps
 */

export const Cards = (props) => {
    const iconStyle = {
        backgroundColor: 'blue',
        height: '200px',
    };

    return (
        <div>
            <div className={style.CardBox}>
                <div className={style.card}>
                    <div>
                        <div className={style.numbers}>{props.saldo}</div>
                        <div className={style.cardName}>{props.titulo}</div>
                    </div>
                    <div className={style.iconBx} style={iconStyle}>
                        <div className="icono" style={{ height: '100px', width: '200px' }}>
                            {props.icono}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

