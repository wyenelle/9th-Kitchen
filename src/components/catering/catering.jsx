import "./catering.css";
import jonathan from "./chef-jonathan.jpg";
import Egusi from './egusi-soup.jpg'
import Omelette from './omlette.jpg'
import Vege from './vegetable-soup.jpg'
const Catering = () => (
  <section className="container-fluid x">
    <header className="catering-header d-block d-md-none">
        <h1 className="x">Catering</h1>
        <h4 className="subtitle">place an order 24hrs before time</h4>
      </header>
    
    <div className="contain">
      <header className="catering-header d-none d-md-block">
        
        <p className="lead ">place an order 24hrs before time</p>
      </header>

      <div className="bg row g-4">
        <div className="order col-sm-12 col-md-4">
          <img src={Egusi} className="  img-response " />
          <p className="text-secondary order-text mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            quasi.
          </p>
        </div>

        <div className="order col-sm-12 col-md-4">
          <img src={Omelette} className="  img-response " />
          <p className="text-secondary order-text  mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            quasi.
          </p>
        </div>

        <div className="order col-sm-12 col-md-4">
          <img src={Vege} className=" img-response " />
          <p className="text-secondary order-text  mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            quasi.
          </p>
        </div>
      </div>
    </div>
    

  </section>
);
export default Catering;
