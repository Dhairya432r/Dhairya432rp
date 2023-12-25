import React, { useState } from 'react';
import NavBar from './NavBar';
import Dhairya from './Dhairya';

const MainComponent = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Dhairya user={user} setUser={setUser} />
    </>
  );
};

export default MainComponent;
