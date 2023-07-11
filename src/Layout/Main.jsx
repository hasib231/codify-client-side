import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Navbar2 from '../components/Navbar2';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Navbar2></Navbar2> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;