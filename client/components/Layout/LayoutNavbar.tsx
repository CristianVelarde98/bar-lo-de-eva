/* eslint-disable no-alert */
import React, { ReactNode } from 'react';
import Router from 'next/router';
import Navbar from '../navbar';

type PropsChildren = {
  children: ReactNode;
};

type stateLayout = {
  isDesktop: boolean;
  hasError: boolean;
};

class LayoutNavbar extends React.Component<PropsChildren, stateLayout> {
  componentDidMount() {
    if (window.innerWidth < 1024) Router.push('/');
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    alert(`Error en LayoutNavbar: ${error} ${errorInfo}`);
    Router.push('/');
  }

  render() {
    const { children } = this.props;
    return (
      <section className='flex flex-row w-screen h-screen'>
        <Navbar />
        <section className='pl-[60px] w-full h-full flex items-center justify-center navbarRest overflow-y-auto'>
          {children}
        </section>
      </section>
    );
  }
}

export default LayoutNavbar;
