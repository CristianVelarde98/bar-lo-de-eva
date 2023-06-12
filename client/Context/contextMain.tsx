import React from 'react';
import { ScreenSize } from './types';

const contextMain = React.createContext<ScreenSize>({
  isMobile: false,
});

export default contextMain;
