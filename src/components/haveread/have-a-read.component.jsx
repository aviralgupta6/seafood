import "./have-a-read.styles.css";
import { read_data } from "../../data";

const HaveARead = () => (
  <div className="content-center">
    <div className="title-text top-margin">Have a read</div>
    <div className="cards container">
      {read_data.map(({ question, answer }, index) => (
        <div key={index} className="read-card card">
          <div className="card-details1">
            <div className="card-title text-size">{question}</div>
            <div className="card-text  text-size">{answer}</div>
          </div>
          <a href="#" className="align-item-right align-item-bottom">
            Read More <i className="arrow right"></i>
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default HaveARead;
