// RightDrawerProvider.js
import React, { useState } from 'react';
import RightDrawerContext from './RightDrawerContext';

const RightDrawerProvider = ({ children }) => {
  const [isRightDrawerOpen, setRightDrawerOpen] = useState(false);

  const openRightDrawer = () => setRightDrawerOpen(true);
  const closeRightDrawer = () => setRightDrawerOpen(false);

  return (
    <RightDrawerContext.Provider value={{ isRightDrawerOpen, openRightDrawer, closeRightDrawer }}>
      {children}
    </RightDrawerContext.Provider>
  );
};

export default RightDrawerProvider;
