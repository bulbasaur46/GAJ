import React from 'react';

const InterviewList = (props) => {
  const {interviews, onDelete} = props;
  return (
    <ul>
      {interviews.map(interview => (
        <li key={interview.id}>
          {interview.name}
          <button onClick={() => onDelete(interview.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default InterviewList;