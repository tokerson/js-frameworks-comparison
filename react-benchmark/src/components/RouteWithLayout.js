import React from 'react';
import { Route } from 'react-router-dom';
import '../shared/styles/layout.css';

const RouteWithLayout = (props) => {
  return (
    <div className='layout'>
      <Route {...props} />
    </div>
  );
};

export default RouteWithLayout;
