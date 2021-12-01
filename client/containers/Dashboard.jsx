import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import ApplicationList from '../components/ApplicationList';
import InterviewList from '../components/InterviewList';
import Calendar from '../components/Calendar';
import StatsBar from '../components/StatsBar';

const Dashboard = props => {
  const { state } = useLocation();
  const [userState, setUserState] = useState({
    ...state,
    needsRefresh: true,
  });

  // const getUserData = () => {
  //   axios
  //     .get(`/api/user/${userState.user._id}`)
  //     .then((response) => {
  //       // console.log('GET user response: ', response);
  //       setUserState(response.data);
  //     })
  //     .catch((err) => {
  //       console.log('ERROR: ', err);
  //     });
  // };

  // useEffect(() => {
  //   if (userState.needsRefresh) {
  //     getUserData();
  //     state.needsRefresh = false;
  //   }
  // }, [userState.needsRefresh]);
  
  return (
    <div className='dashboard'>
      <div>
        <ApplicationList state={state}/>
      </div>
      {/* <div>
        <StatsBar state={state}/>
      </div> */}
    </div>
  );
};

export default Dashboard;