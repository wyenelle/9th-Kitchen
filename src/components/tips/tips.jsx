
import "./tips.css";
import Tip from "./tip";
import jason from './jason.jpg'
import louis from './louis.jpg'
import redcharlie from './redcharlie.jpg'

const TipContainer = () => {
  const headers = ["hello boss", "some text", "nothing"]
  const image = [jason,louis,redcharlie]

  const keys = [1, 2, 3]
  return (
    <section className="section">
      <div className="container-fluid ">
        <h2 className="text-center text-primary mt-5"> Our Food</h2>
        
        <div className="underline"></div>
        <div className="row g-3 ">
          
          {
            headers.map(
              (header,idx) => <Tip key={keys[idx]} header={header} image={image[idx]}/>
            )
          }

          
        </div>
      </div>
    </section>
  );
};

export default TipContainer;
