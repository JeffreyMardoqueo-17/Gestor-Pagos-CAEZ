import React from 'react'
import style from '../components/Table.module.css'


/**Se crea un componente tabla ya que esta tabla la llamare muchas veces, porque tendra el listado de los alumnos */
export const Table = () => {
    return (
        <div className='Table-Container'>
            <div class="recentOrders">
                <div class="cardHeader">
                    <h2>Recent Orders</h2>
                    <a href="#" class="btn">View All</a>
                </div>
                <form>
                    <input type='text' name='buscador' autoComplete='off'></input>
                    <button type='submit'></button>
                </form>
            </div>
        </div>
    )
}
