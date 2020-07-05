import React from 'react';

function Total(props) {
  let sum = 0;
  Object.keys(props.selected).forEach((key) => {
    sum += props.selected[key][1];
  });
  return (
    <div className="summary__total">
      <div className="summary__total__label">Your Price: </div>
      <div className="summary__total__value">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(sum)}
      </div>
    </div>
  );
}

export default Total;
