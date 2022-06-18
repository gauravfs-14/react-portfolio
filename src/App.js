import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <>
        <Navbar fname="Gaurab" />
        <div className="content">
          <Switch>
            <Route
              path="/react-portfolio"
              exact
              render={() => <Home fname="Gaurab" lname="Chhetri" />}
            />
            <Route
              path="/react-portfolio/about"
              render={() => <About fname="Gaurab" />}
            />
            <Route
              path="/react-portfolio/services"
              render={() => <Services />}
            />
            <Route path="/react-portfolio/contact" render={() => <Contact />} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
