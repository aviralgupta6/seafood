import "./faq.styles.css";
import { faq_data } from "../../data";
import { Accordion } from "react-bootstrap";

const Faq = () => (
  <div className="content-center">
    <div className="title-text top-margin">FAQ</div>
    <div className="cards container">
      {faq_data.map(({ question, answer }, index) => (
        <div key={index} className="faq-card card">
          <div className="card-details2">
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey={index}>
                <Accordion.Header>
                  <div className="card-title text-size">
                    <div className="">{question}</div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="card-text  text-size">{answer}</div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Faq;
