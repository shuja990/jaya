import React, {Fragment} from 'react';
import Header from './../components/header'
import PageTitle from './../components/pagetitle'

import Footer from './../components/footer'
import Scrollbar from './../components/scrollbar'
import CtaSection from './../components/cta'
import TeamSection from '../components/team/index'

const President =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={`Meet the team`} pagesub={''}/> 
            <TeamSection/>
            <CtaSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default President;
