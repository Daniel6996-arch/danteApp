import React from 'react';
import './App.css';
import Login from './components/login'

function App() {
  return (
    <div className="App">
     <div>
     <a className='logo'>DanteApp</a>
     </div>
     <div className='flex'>
       <button onClick={Login} className='login btn btn-outline-primary'>Login</button>
       <button className='reg btn btn-outline-success'>Register</button>
     </div>
    </div>
  );
}

export default App;
