import React from 'react'
import style from '../components/Table.module.css'

export const Table = () => {
    return (
        <div className='Table-Container'>
            <div class="recentOrders">
                <div class="cardHeader">
                    <h2>Recent Orders</h2>
                    <a href="#" class="btn">View All</a>
                </div>

                <table>
                    <thead>
                        <tr>
                            <td>Nombre</td>
                            <td>Grado</td>
                            <td>Payment</td>
                            <td>Status</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Star Refrigerator</td>
                            <td>$1200</td>
                            <td>Paid</td>
                            <td><span class="status delivered">Delivered</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
