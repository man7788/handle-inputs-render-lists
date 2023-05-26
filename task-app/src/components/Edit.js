import React from 'react';

const Edit = (props) => {
  const { edits } = props;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {edits.map((edit) => {
        return (
          <div key={edit.id}>
            {edit.field}
            {edit.display}
          </div>
        );
      })}
    </div>
  );
};

export default Edit;
