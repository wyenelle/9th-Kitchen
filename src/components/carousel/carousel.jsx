import "./carousel.css";
import jonathan from './chef-jonathan.jpg'
import section1 from './section1.jpg'
import section2 from './section2.jpg'


const Carousel = () => (
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={section1} class="d-block w-50" alt="..." />
      </div>
      <div class="carousel-item">
        <img src={section2} class="d-block w-50" alt="..." />
      </div>
      <div class="carousel-item">
        <img src={jonathan} class="d-block w-50" alt="..." />
      </div>
    </div>
  </div>
);
export default Carousel