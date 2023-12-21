import React from 'react'
import style from '../components/Table.module.css'


/**Se crea un componente tabla ya que esta tabla la llamare muchas veces, porque tendra el listado de los alumnos */
export const Table = () => {
    return (
        <div className='Table-Container'>
           {/* <!-- ================ Order Details List ================= --> */}
            <div className={style.details}>
                <div className={style.recentOrders}>
                    <div className={style.cardHeader}>
                        <h2>Alumnos</h2>
                        <a href="#" className={style.btn}>Agregar Alumnos</a>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Nombre</td>
                                <td>Nie</td>
                                <td>Meses pendientes</td>
                                <td>Grado</td>
                                <td>Estado</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Jeffrey Mardoqueo Jimenez Santos</td>
                                <td>2345678</td>
                                <td>1</td>
                                <td>9°</td>
                                <td><span className={style.status}>Saldado</span></td>
                            </tr>
                              <tr>
                                <td>Jeffrey Mardoqueo Jimenez Santos</td>
                                <td>2345678</td>
                                <td>1</td>
                                <td>9°</td>
                                <td><span className={style.status}>Saldado</span></td>
                            </tr>
                              <tr>
                                <td>Jeffrey Mardoqueo Jimenez Santos</td>
                                <td>2345678</td>
                                <td>1</td>
                                <td>9°</td>
                                <td><span className={style.status}>Saldado</span></td>
                            </tr>
                              <tr>
                                <td>Jeffrey Mardoqueo Jimenez Santos</td>
                                <td>2345678</td>
                                <td>1</td>
                                <td>9°</td>
                                <td><span className={style.status}>Saldado</span></td>
                            </tr>
                              <tr>
                                <td>Jeffrey Mardoqueo Jimenez Santos</td>
                                <td>2345678</td>
                                <td>1</td>
                                <td>9°</td>
                                <td><span className={style.status}>Saldado</span></td>
                            </tr>
                              <tr>
                                <td>Jeffrey Mardoqueo Jimenez Santos</td>
                                <td>2345678</td>
                                <td>1</td>
                                <td>9°</td>
                                <td><span className={style.status}>Saldado</span></td>
                            </tr>
                              <tr>
                                <td>Jeffrey Mardoqueo Jimenez Santos</td>
                                <td>2345678</td>
                                <td>1</td>
                                <td>9°</td>
                                <td><span className={style.status}>Saldado</span></td>
                            </tr>
                              <tr>
                                <td>Jeffrey Mardoqueo Jimenez Santos</td>
                                <td>2345678</td>
                                <td>1</td>
                                <td>9°</td>
                                <td><span className={style.status}>Saldado</span></td>
                            </tr>
                              <tr>
                                <td>Jeffrey Mardoqueo Jimenez Santos</td>
                                <td>2345678</td>
                                <td>1</td>
                                <td>9°</td>
                                <td><span className={style.status}>Saldado</span></td>
                            </tr>
                              <tr>
                                <td>Jeffrey Mardoqueo Jimenez Santos</td>
                                <td>2345678</td>
                                <td>1</td>
                                <td>9°</td>
                                <td><span className={style.status}>Saldado</span></td>
                            </tr>
                            
                             {/* //borrar desde aqui */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
