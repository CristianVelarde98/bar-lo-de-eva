import React from 'react';
import { ScreenSize } from './types';

const ContextMain = React.createContext<ScreenSize>({
  isMobile: false,
});

export default ContextMain;
