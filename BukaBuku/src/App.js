import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import Comments from "./Pages/Comments/Comments";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => { setCurrentForm(formName);
  }

  return (
    <div className="App">
      <Comments />
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
