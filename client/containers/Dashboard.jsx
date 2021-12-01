import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import ApplicationList from '../components/ApplicationList';
import InterviewList from '../components/InterviewList';
import Calendar from '../components/Calendar';
import StatsBar from '../components/StatsBar';

const Dashboard = props => {
  const { state } = useLocation();
  const [apps, setApps] = useState({
    ...state,
    needsRefresh: false,
  });

  const getApps = () => {
    axios
      .get('/api/application/all')
      .then((response) => {
        // console.log('GET user response: ', response);
        setApps(response.data);
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  };

  useEffect(() => {
    if (apps.needsRefresh) {
      getApps();
      apps.needsRefresh = false;
    }
  }, [apps.needsRefresh]);
  
  return (
    <div className='dashboard'>
      <div>
        <ApplicationList apps={apps} setApps={setApps}/>
      </div>
      <div>
        <StatsBar state={state}/>
      </div>
    </div>
  );
};

export default Dashboard;