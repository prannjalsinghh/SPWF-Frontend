import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import './donation.css'
import AboutUsImage from '../components/AboutUsImage';
import donationimage from '../img/donate.jpeg'
import LoadingSpinner from '../UI/Loading';

function Donation() {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState();
  const [Name,nameSetHandler]= useState('');
  const [Email,emailSetHandler]= useState('');
  const [Phone,phoneSetHandler]= useState();
  const [pan,panSet] = useState('');
  const [address,addressSet] = useState('')
  const [isValid,checkValidity] = useState(true);

  const nameHandler=(event)=>{
    checkValidity(true);
    nameSetHandler(event.target.value)
}
const emailHandler=(event)=>{
  checkValidity(true);
    emailSetHandler(event.target.value);
}
const phoneHandler=(event)=>{
  checkValidity(true);
    phoneSetHandler(event.target.value)

}
const panHandler = (event)=>{
  checkValidity(true);
  panSet(event.target.value);
}

const addressHandler = (event)=>{
  checkValidity(true);
  addressSet(event.target.value);
}

const checker = ()=>{
  if(Name.trim().length===0 || Email.trim().length===0|| !Email.includes('@') ||Phone.trim().length===0||orderAmount<=0 || pan.trim().length===0 || address.trim().length===0){
    checkValidity(false);
    return;
  }
  loadRazorpay();
}

  function loadRazorpay() {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onerror = () => {
      alert('Razorpay SDK failed to load. Are you online?');
    };
    script.onload = async () => {
      try {
        setLoading(true);
        const result = await axios.post('/razorpay/create-order', {
          amount: orderAmount + '00',
        });
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get('/razorpay/get-api-key');

        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: 'NGO',
          description: 'FOR CHARITY',
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post('/razorpay/pay-order', {
              name:Name,  
              amount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              panNumber:pan,
              address:address
            });
            alert(result.data.msg);
            
          },
          prefill: {
            name: Name,
            email: Email,
            contact: Phone,
          },

          theme: {
            color: '#80c0f0',
          },
        };

        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  }

  return (
    
      <div>
        <Header/>
        <AboutUsImage heading="`Giving is not about making a donation, It's about making a difference!`" image={donationimage}/>
        <br/>
        <br/>
    <div className='donation-form'>
    { !isValid && <div style={{backgroundColor:"rgb(248, 126, 126)",textAlign:"center",width:"35%",marginTop:"5%"}}>
                Please enter Valid Details
            </div>} 
    <h2 style={{textAlign:"center"}}> DONATION</h2>
        <input type="text" placeholder="Enter Name" onChange={nameHandler} value={Name}/>
        <input type="email" placeholder="Enter Email" onChange={emailHandler} value={Email}/>
        <input type="text" placeholder="Enter Mobile Number" onChange={phoneHandler} value={Phone}/>
        <input type="text" placeholder="Enter PAN No." onChange={panHandler} value={pan}/>
        <input type="text" placeholder="Enter Address " onChange={addressHandler} value={address}/>
        
        
          <input
            placeholder="Enter Amount"
            type="number"
            value={orderAmount}
            onChange={(e) => setOrderAmount(e.target.value)}
          ></input>
       

        <button style={{borderRadius:"10px"}} disabled={loading} onClick={checker}>
          Donate
        </button>
        {loading && <LoadingSpinner/>}
    </div>
        
        <Footer/>
      </div>
      

  );
}

export default Donation;