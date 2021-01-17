import React from 'react';
import { Link } from 'react-router-dom';
import { ChildHeading, HeadingContent, HomeContainer } from '../../components/StyledComponents/Home';

export const Home: React.FC<any> = () => {
  return (
    <HomeContainer>
      <HeadingContent>
        This application will demonstrate <strong>Server Sent Events</strong>. It is only for demo purpose. This is
        designed using React Typescript template along with Redux and sagas as middleware.
      </HeadingContent>

      <ChildHeading>
        Click on below link to navigate to child component that will display server time by establishing connection with
        server that sends time to client in the form of events after every 5s.
      </ChildHeading>

      <Link
      style={{fontSize: '1.5rem'}}
        to={{
          pathname: '/child',
        }}
      >
        Child
      </Link>
    </HomeContainer>
  );
};
