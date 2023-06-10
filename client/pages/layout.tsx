import React, { useState } from 'react';

type PropsChildren = {
  children: ReactNode;
};

type stateLayout = {
  isDesktop: boolean;
  hasError: boolean;
};

class LayoutNavbar extends React.Component<PropsChildren, stateLayout> {
  componentDidMount() {
    const [isMobile, setIsMobile] = useState(false);
    if (window.innerWidth < 1024) setIsMobile(true);
    else setIsMobile(false);
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
        <section className='h-full  flex items-center justify-center navbarRest'>
          {children}
        </section>
      </section>
    );
  }
}

export default LayoutNavbar;
