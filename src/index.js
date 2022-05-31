import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
export const UserContext = createContext();

const Index = () => {

  const [user, setUser] = useState('Sunday Omolewu');

  return (
    <UserContext.Provider value={user}>
      <App user={user} />
    </UserContext.Provider>
  )
}

export default Index

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Index />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
