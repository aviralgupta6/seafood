import "./App.css";
import { useRef } from "react";
import AppBar from "./components/app-bar/app-bar.component";
import Background from "./components/background/background.component";
import Category from "./components/category/category.component";
import Details from "./components/details/details.component";
import Glance from "./components/glance/glance.component";
import Faq from "./components/faq/faq.component";
import HaveARead from "./components/haveread/have-a-read.component";
import Topics from "./components/topics/topics.component";
import Footer from "./components/footer/footer.component";
import FixedButton from "./components/fixed-button/fixed-button.component";
function App() {
  const detailsRef = useRef(null);

  return (
    <div className="page">
      <Background />
      <AppBar />
      <div className="clearfix">
        <Details ref={detailsRef} />
        <Category />
        <Glance />
        <Faq />
        <HaveARead />
        <Topics />
        <FixedButton />
        <Footer />
      </div>
    </div>
  );
}

export default App;
