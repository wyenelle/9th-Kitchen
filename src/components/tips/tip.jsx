import "./tip.css";

const Tip = ({image, header}) => (

  <div className="col-md-4 col-sm-12 rounded shadow">
    <div className="card">
      <img
        src={image}
        className="card-img-top"
        alt="nothing"
      />
      <div className="card-body text-center ">
        <h4 className="card-title"> {header}</h4>
        <p className="card-text ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
          atque?
        </p>
        <button className="btn btn-primary style" type="button"> Take a Look</button>
      </div>
    </div>
  </div>
);
export default Tip;
