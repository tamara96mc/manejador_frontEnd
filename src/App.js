import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Jiras from './containers/Jiras/Jiras';
import Home from './containers/Jiras/Jiras';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import Register from './containers/Register/Register';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Header/>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/register" element={<Register/>} />
          <Route  path="/profile" element={<Profile/>} />
          <Route  path="/jiras" element={<Jiras/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
