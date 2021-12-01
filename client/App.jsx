import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './containers/Dashboard';
import ApplicationView from './containers/ApplicationView';
import AddEditApp from './components/AddEditApp';
import AppDetails from './components/AppDetails';
import Calendar from './components/Calendar';
import './stylesheet/style.scss';


const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path='/' element={<LoginPage />}>
          <Route index element={<LoginForm />} />
          <Route path='signup' element={<SignupForm />} />
        </Route>
        <Route path='/home' element={<Dashboard />} />
        <Route path='/app' element={<ApplicationView />}>
          <Route path='/app/new' element={<AddEditApp />} />
          <Route path='/app/:id' element={<AppDetails />} />
          <Route path='/app/calendar' element={<Calendar />} />
        </Route>
        <Route 
          path='*' 
          element={
            <main style={{ padding: '1rem' }}>
              <p>There is nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
};


export default App;