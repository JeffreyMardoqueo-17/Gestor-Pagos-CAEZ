import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CS
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Table} from './components/Table.jsx'
import Menu from './components/Menu.jsx'
import RegistroAlumno from './components/RegistroAlumno.jsx';
import Login from './pages/Login/Login.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Menu /> */}
    {/* <App /> */}
    {/* <Login /> */}
    {/* <Table></Table> */}
    {/* <RegistroAlumno /> */}
    <NavBar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// /(())