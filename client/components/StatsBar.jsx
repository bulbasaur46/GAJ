import React from 'react';

const StatsBar = props => {
  return (
    <div className="stats-bar-container">
      <div className="stats-title">
        <h1>Stats Bar</h1>
      </div>
      <div className="stats-container">
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
        <h4>Graphs will go here</h4>
      </div>
    </div>
  );
};

export default StatsBar;