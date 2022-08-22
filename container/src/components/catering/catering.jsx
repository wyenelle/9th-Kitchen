import "./catering.css";
import Food from "./food";
import jonathan from "./chef-jonathan.jpg";
import Egusi from "./egusi-soup.jpg";
import Omelette from "./omlette.jpg";
import Vege from "./vegetable-soup.jpg";

const Catering = () => {
  let image = [Egusi, Omelette, Vege];
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
