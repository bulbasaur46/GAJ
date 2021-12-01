import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import ApplicationList from '../components/ApplicationList';
import InterviewList from '../components/InterviewList';
import Calendar from '../components/Calendar';
import StatsBar from '../components/StatsBar';
import AddEditApp from '../components/AddEditApp';
import { Button } from '@mui/material';

const Dashboard = props => {
  const { state } = useLocation();
  const [refresh, setRefresh] = useState(true);
  const [apps, setApps] = useState([]);

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
    if (refresh) {
      getApps();
      setRefresh(false);
    }
  }, [refresh]);
  
  // {/* <AddEditApp apps={apps} setApps={setApps} setRefresh={setRefresh} /> */}
  return (
    <div className="dashboard">
      <div>
        <h1>GAJ (update later)</h1>
        <img src="/assets/working_person.png"/>
      </div>

      <div>
        {/* <AddEditApp apps={apps} setApps={setApps} setRefresh={setRefresh} /> */}
        <ApplicationList apps={apps} setApps={setApps} />

        <Button className="addApp" variant="text">
          <Link to="/app/new">Add App</Link>
        </Button>
      </div>
      <div>
        <StatsBar state={state} apps={apps} setApps={setApps} />
      </div>
    </div>
  );
};

export default Dashboard;