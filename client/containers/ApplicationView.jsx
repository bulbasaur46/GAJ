import React from 'react';
import { Outlet } from 'react-router-dom';
import AddEditApp from '../components/AddEditApp';

const ApplicationView = props => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ApplicationView;