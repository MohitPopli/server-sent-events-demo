import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC<any> = () => {
  return (
    <div style={{display: 'flex'}}>
      Welcome to SSE Demo
      <Link
        to={{
          pathname: '/child',
        }}
      > Child </Link>
    </div>
  );
};
