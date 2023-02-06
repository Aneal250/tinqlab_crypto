import logo from "./logo.svg";
import "./App.css";
import Navigation from "./component/Navigation";
import SubHero from "./component/SubHero";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <SubHero />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
