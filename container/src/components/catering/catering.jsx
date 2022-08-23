import "./catering.css";
import Food from "./food";
import Semo from './egusi.jpg';
import Egusi from "./egusi-soup.jpg";
import Omelette from "./omlette.jpg";
import Vege from "./vegetable-soup.jpg";
import Louis from './louis.jpg'
import Burger from './section2.jpg'

const Catering = () => {
  let image = [Egusi, Omelette,Louis,Burger, Vege,Semo];
  return (
    <section className="container-fluid x">
      <div className="contain-wrap">
{/*         
          // generating new components based on the image array value */}
          {image.map( img => <Food img={img} className=''/>)}
          
        </div>
      
    </section>
  );
};
export default Catering;
