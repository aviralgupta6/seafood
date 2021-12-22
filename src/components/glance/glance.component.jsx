import "./glance.styles.css";
import img from "../../images/glance.png";

const Glance = () => (
  <div className="content-center glance">
    <div className="title-text">A Glance at the Product</div>
    <img src={img} alt="Glance" className="glance-image" />
  </div>
);

export default Glance;
