import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Base_url } from '../Config/BaseUrl';

export const PaymentPage = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
    });

    const getUser = async () => {
        try {
            const response = await axios.get(`${Base_url}api/users/${userId}`); // Update the API endpoint accordingly
            
            const Data = response.data;
            
            if (Data && Data.data && Data.data.user) {
                console.log("User Data by id  =====>  : ", Data.data.user);
                setUserData(Data.data.user);
            }
        } catch (error) {
            console.error('Error fetching MemberShip Data ======>:', error.message);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data =====> ", userData);
        // openRazorpay();
    };

    const openRazorpay = () => {
        const options = {
            key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key ID
            amount: 1000, // Amount in paise (e.g., 1000 paise = INR 10)
            currency: 'INR',
            name: userData.name,
            description: 'Test Transaction',
            handler: function (response) {
                alert(response.razorpay_payment_id);
                // Handle the success response
            },
            prefill: {
                name: userData.name,
                email: userData.email,
                contact: userData.mobile,
            },
            notes: {
                address: userData.address,
            },
            theme: {
                color: '#F37254',
            },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    useEffect(() => {
        getUser();
    }, []);

    const formContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        
    };

    const formStyle = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width:"300px"
    };

    const inputStyle = {
        display: 'block',
       width: '90%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        backgroundColor: '#28a745',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    const handleBackToApp = () => {
        window.location.href = 'samsara://home'; // Adjust this to match your app's deep link
      };


    return (
        <div style={formContainerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={userData.name} readOnly style={inputStyle} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" value={userData.email} readOnly style={inputStyle} />
                </div>
                <div>
                    <label>Mobile:</label>
                    <input type="text" value={userData.mobile} readOnly style={inputStyle} />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" value={userData.address} readOnly style={inputStyle} />
                </div>
                <button onClick={handleBackToApp} style={buttonStyle}>Proceed to Payment</button>
            </form>
        </div>
    );
};
