import React from 'react'
import style from './cards.module.css'
//usaurios
import { FaUsers } from "react-icons/fa6";
//deudas
import { GiTakeMyMoney } from "react-icons/gi";
//deudores
import { FaUserClock } from "react-icons/fa";
//money
import { GiMoneyStack } from "react-icons/gi";
/**
 * Este es un componente card, el cual debera tener un diseo predeterminado con parametros especificos que se brindaran desde las etiquetas como las porps
 */
import 'react-icons'
export const Cards = (props) => {
    const iconStyle = {
        backgroundColor: 'blue',
        height: '200px',
    };

    return (
        <div>
            <div className={style.cardBox}>
                <div className={style.card}>
                    <div>
                        <div className={style.numbers}>$400</div>
                        <div className={style.cardName}>Total Deudas</div>
                    </div>

                    <div className={style.iconBx}>
                        <GiTakeMyMoney/>
                    </div>
                </div>

                <div className={style.card}>
                    <div>
                        <div className={style.numbers}>80</div>
                        <div className={style.cardName}>Deudores</div>
                    </div>

                    <div className={style.iconBx}>
                        <FaUserClock />
                    </div>
                </div>

                <div className={style.card}>
                    <div>
                        <div className={style.numbers}>284</div>
                        <div className={style.cardName}>Alumnos</div>
                    </div>

                    <div className={style.iconBx}>
                        <FaUsers/>
                    </div>
                </div>

                <div className={style.card}>
                    <div>
                        <div className={style.numbers}>$7,842</div>
                        <div className={style.cardName}>Taltal Fondos</div>
                    </div>

                    <div className={style.iconBx}>
                        <GiMoneyStack />
                    </div>
                </div>
            </div>
        </div>
    );
};

