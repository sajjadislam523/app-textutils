import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About" contactText="Contact" homeText="Home" /> */}
      <Navbar title="TextUtils" />
      <div className='container px-6 md:px-0 mx-auto'>
        <ThemeSwitcher />
        {/* <TextForm heading="Enter the text to analyze below" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
