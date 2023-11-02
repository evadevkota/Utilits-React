import React from 'react';

function Alert(props) {
  return (
    <div>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
          <strong>{props.alert.type}</strong> {props.alert.message}
        </div>
      )}
    </div>
  );
}

export default Alert;
