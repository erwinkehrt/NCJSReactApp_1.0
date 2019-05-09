import React from 'react';

export const Card = props => (
    <div className="col-md-6 col-lg-3">
      <div className="card mb-3">
        <div className="card-body">
          <p className="card-title"><span>Name: </span>{props.info.name}</p>
          <p className="card-text">
            <span>Age: </span>{props.info.age}
          </p>
        </div>
      </div>
    </div>
);