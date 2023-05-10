import React from 'react'
import UserChart from '../components/UserChart';
import CountriesChart from '../components/CountriesChart';
import Header from '../components/Header';

const Homepage = () => {
    return (
        <>
                <Header />
                <UserChart />
         
                <CountriesChart />
            
        </>
    )
}

export default Homepage;
