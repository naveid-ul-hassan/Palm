import React, { Fragment } from "react";
import Footer from "./footer";
import Header from "./Header";
import MainHeader from './mainHeader';
import MobileApp from './downloadApp';
import NewFile from './NewFile';
import FeedBack from './Feedback';
import ManagementModel from './ManagementModel';
import Features from './Features';

const Landing = () => {
  return (
    <Fragment>
      <Header/>
      <MainHeader/>
      <MobileApp/>
      <ManagementModel/>
      <Features/>
      <FeedBack/>
      {/* <NewFile/> */}
      {/* <Slider /> */}
      <Footer/>
    </Fragment>
  );
};

export default Landing;
