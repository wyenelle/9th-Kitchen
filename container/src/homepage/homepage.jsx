import React from "react";
import Nav from "../components/nav/nav";
import Header from "../components/header/header";
import Catering from "../components/catering/catering";
import Order from "../components/order/order";
import About from "../components/about/about";
const Homepage = ()=>(
    <main className="wrapper">
        <Nav />
        <Header />
        <About />
        <Catering/>
        <Order/>
        

    </main>
)
export default Homepage