import React from 'react';

const Delete = (props) => {
  const { tasks, onClick } = props;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <button key={task.id} id={task.id} onClick={onClick}>
              Delete
            </button>
          </div>
        );
      }, this)}
    </div>
  );
};

export default Delete;
