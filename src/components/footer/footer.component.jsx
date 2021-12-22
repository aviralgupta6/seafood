import "./footer.styles.css";
import { logo_url } from "../../data";

const Footer = () => (
  <div className="footer-container">
    <div className="d-flex  flex-column bd-highlight flex-column-footer ">
      <div className="d-flex justify-content-between p-2 width-50 fixing-container-size">
        <img
          src={logo_url}
          alt="logo-footer-image"
          className="logo-image-sizing"
        />
        <div className="right-content wrapper">
          <h5 className="footer-links">Support</h5>
          <h5 className="footer-links">Terms and Condition</h5>
          <h5 className="footer-links">About Us</h5>
          <h5 className="footer-links">Return and Refund Policy</h5>
          <h5 className="footer-links">Privacy Policy</h5>
          <h5 className="footer-links">Shipping and Delivery Policy</h5>
        </div>
      </div>
      <div className="footer-bottom ">
        <div className="footer-bottom-content">Sea Basktet</div>
        <div className="footer-bottom-content">All Right Reserved</div>
        <div className="footer-bottom-content">2021 Copyright</div>
      </div>
    </div>
  </div>
);

export default Footer;
