import React from 'react';

/*
    Estos 'imports' sirven para incluir bootstrap, NO son necesarios para
    utilizar las gráficas de ChartJS. Yo los utilizaré para modificar 
    rápidamente el aspecto de mi página durante los ejemplos expuestos. 
*/
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import LinesChart from "../components/Graficos/LineChar";
import BarsChart from "../components/Graficos/BarsChart";
import PiesChart from "../components/Graficos/PiesChart";

const Graficos = () => {
    return (
        <div>
            <BarsChart></BarsChart>
        </div>
    );
}

export default Graficos;
