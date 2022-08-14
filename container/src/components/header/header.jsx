import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import './header.css'




const Header =()=>(
   <div className="container-fluid">
     <Carousel>
        <Carousel.Item >
        <header>
        <div className="header-text d-none d-md-block">
            <div>
                <h1 className="slogan text-dark">
                    AS E DAY <span className="text-danger"> HOT!!!</span>
                </h1>
                <p className="slogan-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit, aliquam architecto voluptatum nemo quisquam.
                </p>
            </div>
        </div>

        <div className="header-bg img-responsive" >
            <div className="slogan-container d-md-none d-sm-block">
                <h1 className="slogan">
                AS E DAY <span className="text-danger text-center"> HOT!!!</span>
                </h1>

                <p className="slogan-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit, aliquam architecto voluptatum nemo quisquam.
                </p>
            </div>
        </div>
</header>
        </Carousel.Item>

        <Carousel.Item>
        <header>
        <div className="header-text d-none d-md-block">
            <div>
                <h1 className="slogan text-dark">
                    AS E DAY <span className="text-danger"> HOT!!!</span>
                </h1>
                <p className="slogan-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit, aliquam architecto voluptatum nemo quisquam.
                </p>
            </div>
        </div>

        <div className="header-bg-2 img-responsive" >
            <div className="slogan-container d-md-none d-sm-block">
                <h1 className="slogan">
                AS E DAY <span className="text-danger text-center"> HOT!!!</span>
                </h1>

                <p className="slogan-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit, aliquam architecto voluptatum nemo quisquam.
                </p>
            </div>
        </div>
</header>
        </Carousel.Item>
    </Carousel>
   </div>
    
)

export default Header