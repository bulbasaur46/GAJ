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
        <div className='col col-start'>
          <div className='icon' onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className='col col-center'>
          <span>{moment(state.currentDate).format(dateFormat)}</span>
        </div>
        <div className='col col-end' onClick={nextMonth}>
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
        <div className="col col-center" key={i}>
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
            className={`col cell ${!moment(day).isSame(state.selectedDate, 'month') ? 'disabled' : ''}`}
            key={day}
            onClick={() => {
              setState({
                selectedDate: cloneDay,
              });
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















// we need to pull the state from the parent component later
// const state = {
//   dateObject: moment(),
// };

// //creates blank area for calendar
// const blanks = [];
// for (let i = 0; i < firstDayOfMonth(); i++) {
//   blanks.push(<td className="calendar-day empty">{''}</td>
//   );
// }
// //generates table of date in the month
// const daysInMonth = [];
// for (let d = 1; d <= this.state.dateObject.daysInMonth(); d++) {
//   daysInMonth.push(
//     <td key={d} className="calendar-day">
//       {d}
//     </td>
//   );
// }



// //variables for the calendar
// const totalSlots = [...blanks, ...daysInMonth];
// const rows = [];
// let cells = [];

// totalSlots.forEach((row, i) => {
//   if (i % 7 !== 0) { //if the index is not divisible by 7, dont go to the next week
//     cells.push(row);
//   } else {
//     rows.push(cells); //when you reach the end of the week, push the cells to the rows
//     cells = []; //empty the cells
//     cells.push(row); //push the row to the cells
//   }
//   if (i === totalSlots.length - 1) { //when you reach the end of the array, push the cells to the rows
//     rows.push(cells);
//   }
// });

// const trElems = rows.map((d, i) => {
//   return <tr key={d}>{d}</tr>;
// });



// const weekdayShort = moment.weekdayShort();

// const weekdaysShortname = this.weekdayShort.map(day => {
//   return (
//     <th key={day} className='week-day'>
//       {day}
//     </th>
//   );
// });
// };

// //getter function for first day of month
// const firstDayOfMonth = () => {
// const dateObject = this.state.dateObject;
// const firstDay = moment(dateObject)
//   .startOf('month')
//   .format('d');
// return firstDay;