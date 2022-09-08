import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');

  const [alert, setAlert] = useState('')

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert('')
    }, 1400)

  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#332929'
      document.body.style.color = 'white'
      document.title="TextUtils- Dark mode";
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#4a4242'
      document.title="TextUtils- Light mode";

    }
  }

  return (
    <>
      <Router>

        <Navbar title="TextUtils" abouttext="About Us" contact="Contact Us" toggleMode={togglemode} mode={mode} />

        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About/>}/>
            {/* {document.title='TextUtils- About'} */}

            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Text To Analyze"/>}/>
            
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
