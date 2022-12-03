import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCnHnAQ3TJB3kGaGm_9cXe2oPd22jrCV_g',
  authDomain: 'react-coder-app-3782c.firebaseapp.com',
  projectId: 'react-coder-app-3782c',
  storageBucket: 'react-coder-app-3782c.appspot.com',
  messagingSenderId: '731696306491',
  appId: '1:731696306491:web:09dd110750317bf641ff1e',
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </>
);
