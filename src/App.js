import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useEffect, useState } from "react";

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.documentElement.setAttribute("data-theme", newMode);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);


  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About" contactText="Contact" homeText="Home" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className='container px-6 mx-auto md:px-0'>
        <TextForm heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
