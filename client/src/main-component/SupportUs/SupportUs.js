import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero2 from '../../components/hero2'
import Mission from '../../components/mission'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import EventSection from '../../components/event'
import CtaSection from '../../components/cta'
import WorldSection from '../../components/world'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import PageTitle from '../../components/pagetitle'
import Suppo from '../../components/by/index'
import Pricing from '../../components/pricing';

const Support =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'Support Us'} pagesub={'Support'}/> 
            <Suppo subclass={'section-padding'}/>
            <Pricing/>
            <CtaSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Support;