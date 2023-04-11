import React, { createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./navigation/Navigation";

const ThemeContext = createContext({
  role: "",
  changeRole: (item) => item,
  name: "",
  handleChangeName: (item) => item,
});

function AuthConsumer() {
  return React.useContext(ThemeContext);
}

function App() {
  const [role, setRole] = React.useState("unauth");
  const [name, setName] = React.useState("");

  const changeRole = (item) => {
    setRole(item);
  };

  const handleChangeName = (item) => {
    setName(item);
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{ role, changeRole, name, handleChangeName }}>
        <Router>
          <Navigation />
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export { App, AuthConsumer };
