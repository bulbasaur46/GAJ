import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import Dashboard from './containers/Dashboard';
import ApplicationView from './containers/ApplicationView';
import './style.scss';


const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/home' element={<Dashboard />}/>
        <Route path='/details' element={<ApplicationView />}/>
        <Route 
          path='*' 
          element={
            <main style={{ padding: '1rem' }}>
              <p>Theres' nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
};


export default App;