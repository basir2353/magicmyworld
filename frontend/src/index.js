import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './Components/Navbar/AuthContext';
ReactDOM.render(
    <AuthProvider>

 
    <GoogleOAuthProvider clientId='http://444710794299-90qrth72iv3rvcare5oa57lhkl7vm4tr.apps.googleusercontent.com'>
   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
            <App />
    </GoogleOAuthProvider>
    </AuthProvider>,
    document.getElementById('root')
);
