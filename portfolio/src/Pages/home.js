
import React from 'react';
import Header from '../Components/header';
import Section from '../Pages/section';
import Footer from '../Components/footer';


const Home = () => {
    return(
        <React.Fragment>
            <Header title="Home" />
            <Section />
            <Footer />
        </React.Fragment>
    );
};

export default Home;