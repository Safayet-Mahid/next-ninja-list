import React from 'react';
import { Children } from 'react/cjs/react.production.min';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
    return (
        <div className='content'>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;