import React from "react";
import Nav from "../components/nav/nav";
import Header from "../components/header/header";
import TipContainer from "../components/tips/tips";
import Catering from "../components/catering/catering";
//import Carousel from "../components/carousel/carousel";
const Homepage = ()=>(
    <main className="wrapper">
        <Nav />
        <Header />
        <TipContainer/>
        <Catering/>
        

    </main>
)
export default Homepage