import { useState,useEffect } from "react";
import axios from "axios";
import styles from './ShowDonationDataMain.module.css'

function ShowDonationDataMain(){

    const [orders,setOrders] = useState([]);
    async function fetchOrders() {

        

        const { data } = await axios.get('/razorpay/list-orders');
        setOrders(data);
      }
      useEffect(() => {
        fetchOrders();
      }, []);

      return(
        <div className="list-orders">
        <h2>List Orders</h2>
        
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>PAN</th>
              <th>AMOUNT</th>
              <th>ISPAID</th>
              <th>RAZORPAY</th>

            </tr>
          </thead>
          <tbody>
            {orders.map((x) => (
              <tr key={x._id}>
                <td>{x.name}</td>
                <td>{x.panNumber}</td>
                <td>{x._id}</td>
                <td>₹{x.amount / 100}</td>
                <td>{x.isPaid ? 'YES' : 'NO'}</td>
                <td>{x.razorpay.paymentId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
      </div>
      )
}
export default ShowDonationDataMain;