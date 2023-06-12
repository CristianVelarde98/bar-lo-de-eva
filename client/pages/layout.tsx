import React from 'react';

type PropsChildren = {
  children: React.ReactNode;
};

type stateLayout = {
  isDesktop: boolean;
  hasError: boolean;
};

// class LayoutNavbar extends React.Component {
//   render() {
//     const { children } = this.props;
//     return (
//       <section className='flex flex-row w-screen h-screen'>
//         {/* <Navbar /> */}
//         <section className='h-full  flex items-center justify-center navbarRest'>
//           {children}
//         </section>
//       </section>
//     );
//   }
// }

// export default LayoutNavbar;
