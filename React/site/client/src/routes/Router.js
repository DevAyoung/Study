import React, {Fragment} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyRouter = () => {
    return (
        <Fragment>
            <Header />
                <h1> Hello BODY! </h1>
            <Footer />
        </Fragment>
    );
}


    export default MyRouter;