import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const modeToggle = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar darkMode={darkMode} modeToggle={modeToggle} />
        <Alert alert={alert} />
        <Switch>
          {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about">
            <About darkMode={darkMode} />
          </Route>
          <Route exact path="/">
            <TextForm
              showAlert={showAlert}
              heading="Try TextUtils - word counter, character counter, remove extra spaces"
              darkMode={darkMode}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
