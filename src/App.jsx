import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './views/Login';
import Orders from './views/Orders';
import Profile from './views/Profile';
import Navbar from './components/Navbar/Navbar';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
         <Routes>
           <Route path="/" element={ <Login /> } />
           <Route path="/Orders" element={ < Orders /> } />
           <Route path="/Profile" element={ < Profile /> } />
         </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
