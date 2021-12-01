import React, { useState } from 'react';
import moment from 'moment';
import '../stylesheet/calendar.scss';

const Calendar = props => {

  const [state, setState] = useState({
    currentDate: new Date(),
    selectedDate: new Date(),
  });
  
  //creating header functionality
  const header = () => {
    const dateFormat = 'MMMM YYYY';
    return ( 
      <div className='header row flex-middle'>
        <div className='column col-start'>
          <div className='icon' onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className='column col-center'>
          <span>{moment(state.currentDate).format(dateFormat)}</span>
        </div>
        <div className='column col-end' onClick={nextMonth}>
          <div className='icon' onClick={nextMonth}>chevron_right</div>
        </div>
      </div>
    );
  };

  //create daysOfWeek functionality
  const daysOfWeek = () => {
    const dateFormat = 'ddd';
    const days = [];
    let startDate = moment(state.currentDate).startOf('week');
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="column col-center" key={i}>
          {moment(startDate).format(dateFormat)}
        </div>
      );
      startDate = moment(startDate).add(1, 'day');
    }
    return <div className="days row">{days}</div>;
  };

  //create cells functionality
  const cells = () => {

    const monthStart = moment(state.currentDate).startOf('month').format('d');
    const monthEnd = moment(state.currentDate).endOf('month').format('d');
    const startDate = moment(state.currentDate).startOf('month').subtract(monthStart, 'days');
    const endDate = moment(state.currentDate).endOf('month').add(6 - monthEnd, 'days');
    const dateFormat = 'D';
    const rows = [];
    
    let days = [];
    let day = startDate.add(1, 'day');
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = moment(day).format(dateFormat);
        const cloneDay = day;

        days.push(
          <div
            className={`column cell ${!moment(day).isSame(state.selectedDate, 'month') ? 'disabled' : moment(day).isSame(state.selectedDate, 'day') ? 'selected' : ''}`}
            key={day}
            onClick={() => {
              onDateClick(moment(cloneDay).format('YYYY-MM-DD'));
            }}
          >
            <span className='number'>{formattedDate}</span>
            <span className='bg'>{formattedDate}</span>
          </div>
        );
        day = moment(day).add(1, 'day');
      }

      rows.push(
        <div className='row' key={day}>{days}</div>
      );
      days = [];
    }
    return <div className='body'>{rows}</div>;
  };

  const nextMonth = () => {
    setState({
      currentDate: moment(state.currentDate).add(1, 'month').toDate(),
    });
  };

  const prevMonth = () => {
    setState({
      currentDate: moment(state.currentDate).subtract(1, 'month').toDate(),
    });
  };

  const onDateClick = day => {
    setState({
      selectedDate: day,
    });
  };


  return (
    <div className="calendar">
      <div>{header()}</div>
      <div>{daysOfWeek()}</div>
      <div>{cells()}</div>
    </div>
  );
};

export default Calendar;

