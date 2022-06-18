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
              path="/"
              exact
              render={() => <Home fname="Gaurab" lname="Chhetri" />}
            />
            <Route path="/about" render={() => <About fname="Gaurab" />} />
            <Route path="/services" render={() => <Services />} />
            <Route path="/contact" render={() => <Contact />} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
