import React from 'react';

const StatsBar = props => {
  return (
    <div className="stats-bar">
      <div className="stats-bar-container">
        <div className="stats-bar-item">
          <div className="stats-bar-item-label">
            <span>{props.label}</span>
          </div>
          <div className="stats-bar-item-value">
            <span>{props.value}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;