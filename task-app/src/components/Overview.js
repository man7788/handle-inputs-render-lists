import React from 'react';

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.order + 1 + '. '}
            {task.text}
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
