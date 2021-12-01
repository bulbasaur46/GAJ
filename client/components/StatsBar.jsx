import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const StatsBar = ({ state, apps, setApps}) => {
  const [category, setCategory] = useState('status');
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  
  const handleClose = (category) => {
    console.log('selected', category);
    setCategory(category);
    setAnchorEl(null);
  };

  // category -> change labels
  // get counts from apps
  useEffect (() => {
    // store categories and counts
    const counts = {};

    // iterate through each app
    for (const app of apps) {
      // get specific category
      if (counts[app[category]]) {
        counts[app[category]] += 1;
      } else {
        counts[app[category]] = 1;
      }
    }
    setLabels(Object.keys(counts));
    setData(Object.values(counts));
  }, [category]);


  return (
    <div className="stats-bar-container">
      <div className="stats-title">
        <h1>Stats</h1>
      </div>
      <div className="stats-container">
        <div className="total-apps">
          <span>Application Total: {apps.length}</span>
        </div>
        <div className="response-rate">
          <span>Response Rate:</span>
        </div>
        <div className="interview-count">
          <span>Completed Interview Count:</span>
        </div>
        <div className="follow-ups">
          <span>Follow-ups to Send:</span>
        </div>
      </div>
      <div className="chart-container">
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Select Category
        </Button>
        <Menu 
          id="basic-menu" 
          anchorEl={anchorEl} 
          open={open} 
          onClose={handleClose}
          MenuListProps={{'aria-labelledby': 'basic-button'}}
        >
          <MenuItem onClick={() => handleClose('industry')}>Industries</MenuItem>
          <MenuItem onClick={() => handleClose('job_title')}>Job Title</MenuItem>
          <MenuItem onClick={() => handleClose('status')}>Status</MenuItem>
        </Menu>
        <Bar
          className='bar-chart'
          data={{
            labels: labels,
            datasets: [
              {
                label: category,
                data: data,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default StatsBar;