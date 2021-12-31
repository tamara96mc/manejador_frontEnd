import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Jiras from './containers/Jiras/Jiras';
import Jira_proyectos from './containers/Jira_proyectos/Jira_proyectos';
import Jira_campos from './containers/Jira_campos/Jira_campos';
import Home from './containers/Jiras/Jiras';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import Register from './containers/Register/Register';
import Clientes from './containers/Clientes/Clientes';
import DetallesCliente from './containers/DetallesCliente/DetallesCliente';
import CrearCliente from './containers/CrearCliente/CrearCliente';
import Footer from './components/Footer/Footer';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
       <BrowserRouter>
      <Header/>
      <div className='main'>
        <Routes >
          <Route  path="/"  element={props.credentials?.user.nombre ?<Jiras/> :<Navigate to="/login" />} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/register" element={<Register/>} />
          <Route  path="/profile"  element={props.credentials?.user.nombre ?<Profile/> :<Navigate to="/login" />} />
          <Route  path="/proyectos" element={props.credentials?.user.nombre ?<Jira_proyectos/> :<Navigate to="/login" />} />
          <Route  path="/clientes" element={props.credentials?.user.nombre ?<Clientes/> :<Navigate to="/login" />} />
          <Route  path="/detallesCliente" element={props.credentials?.user.nombre ?<DetallesCliente/> :<Navigate to="/login" />} />
          <Route  path="/crearCliente" element={props.credentials?.user.nombre ?<CrearCliente/> :<Navigate to="/login" />} />
          <Route  path="/campos" element={props.credentials?.user.nombre ?<Jira_campos/> :<Navigate to="/login" />} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}


export default connect((state) => ({
  credentials: state.credentials
}))(App);
