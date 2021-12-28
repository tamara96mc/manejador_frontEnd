import {BrowserRouter, Route, Routes} from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Header/>
      <div className='main'>
        <Routes >
          <Route  path="/" element={<Home/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/register" element={<Register/>} />
          <Route  path="/profile" element={<Profile/>} />
          <Route  path="/jiras" element={<Jiras/>} />
          <Route  path="/proyectos" element={<Jira_proyectos/>} />
          <Route  path="/clientes" element={<Clientes/>} />
          <Route  path="/detallesCliente" element={<DetallesCliente/>} />
          <Route  path="/crearCliente" element={<CrearCliente/>} />
          <Route  path="/campos" element={<Jira_campos/>} />
        </Routes>
        </div>
        <div className='prueba'>

        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
