// RightDrawerContext.js
import React from 'react';

const RightDrawerContext = React.createContext({
  isRightDrawerOpen: false,
  openRightDrawer: () => {},
  closeRightDrawer: () => {},
});

export default RightDrawerContext;
