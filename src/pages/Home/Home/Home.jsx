import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors';
import PopularClass from '../PopularClass';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;