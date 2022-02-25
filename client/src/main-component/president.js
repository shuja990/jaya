import React, {Fragment} from 'react';
import Header from './../components/header'
import PageTitle from './../components/pagetitle'

import Footer from './../components/footer'
import Scrollbar from './../components/scrollbar'
import CtaSection from './../components/cta'
import About from '../components/welcome'

const President =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={`President's Welcome`} pagesub={'Welcome to the Jamaican American Youth Alliance!'}/> 
            <About/>
            <CtaSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default President;
