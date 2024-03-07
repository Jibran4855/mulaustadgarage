import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import General from "./components/General";
import General2 from "./components/General2";
import General3 from "./components/General3";
import General4 from "./components/General4";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        {/* <Home />
        <About />
        <Portfolio />
        <Contact /> */}
        <Routes>
          <Route
            path="/mulaustadgarage"
            element={
              <>
                <Navbar />
                <Home />
                <About />
                <Portfolio />
                <Contact />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <About />
                <Portfolio />
                <Contact />
              </>
            }
          />

          <Route path="/mulaustadgarage/1" element={<General />} />
          <Route path="/mulaustadgarage/2" element={<General2 />} />
          <Route path="/mulaustadgarage/3" element={<General3 />} />
          <Route path="/mulaustadgarage/4" element={<General4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
