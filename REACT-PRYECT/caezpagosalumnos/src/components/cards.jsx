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
            {/* <div classNameName={style.CardBox}>
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
            </div> */}
            <div className={style.cardBox}>
                <div className={style.card}>
                    <div>
                        <div className={style.numbers}>1,504</div>
                        <div className={style.cardName}>Total Deudas</div>
                    </div>

                    <div className={style.iconBx}>
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                <div className={style.card}>
                    <div>
                        <div className={style.numbers}>80</div>
                        <div className={style.cardName}>Deudores</div>
                    </div>

                    <div className={style.iconBx}>
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>

                <div className={style.card}>
                    <div>
                        <div className={style.numbers}>284</div>
                        <div className={style.cardName}>Alumnos</div>
                    </div>

                    <div className={style.iconBx}>
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                </div>

                <div className={style.card}>
                    <div>
                        <div className={style.numbers}>$7,842</div>
                        <div className={style.cardName}>Taltal Fondos</div>
                    </div>

                    <div className={style.iconBx}>
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    );
};

