import { useRef } from "react";
import { fish_url, logo_url } from "../../data";
import "./details.styles.css";

const Details = () => {
  const detailsRef = useRef(null);
  const scrollToElement = () => detailsRef.current.scrollIntoView();
  return (
    <div className="details">
      <div className="top">
        <div className="d-flex detail-header">
          <div className="logo-image mr-auto p-2 ">
            <img className="logo" src={logo_url} alt="logo" />
          </div>
          <div className="flexbox-manual">
            <a className="text p-2 " onClick={scrollToElement}>
              Category
            </a>
            <a className="text p-2">FAQs</a>
            <a className="text p-2">My Cart</a>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block button-sizing align-item-right "
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="scrollable-component">
        <div className="center">
          <div className="behind-text">What the</div>
          <img className="image-fish" src={fish_url} alt="fish" />
          <div className="top-text">Fish</div>
        </div>
      </div>
      <div className="bottom">
        <h1 className="title-bottom">How it works</h1>
        <div className="title-details">
          Sea Basktet Delivers fresh sourced seafood in few easy clicks
        </div>
      </div>
    </div>
  );
};
export default Details;
