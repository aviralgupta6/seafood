import "./topics.styles.css";
import { topics_data } from "../../data";

const Topics = () => (
  <div className="content-center topics ">
    <div className="title-text">Topics You can't miss</div>
    <div className="cards container">
      {topics_data.map(({ question, answer, image_url }, index) => (
        <div className="topics-card card ">
          <div
            key={index}
            className=" img-wrap"
            style={{ backgroundImage: `url(${image_url})` }}
          ></div>
          <div className=" card-topics">
            <div className="card-title text-size">{question}</div>
            <div className="card-text text-size">{answer}</div>
          </div>
          <a href="#" className="align-item-bottom">
            Read More <i className="arrow right"></i>
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Topics;
