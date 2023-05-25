import React from 'react';

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul
      style={{
        listStyleType: 'none',
      }}
    >
      {tasks.map((task) => {
        return (
          <li key={task.id} id={task.id} style={{ fontSize: '18.26px' }}>
            {task.order + 1 + '. '}
            {task.text}
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
