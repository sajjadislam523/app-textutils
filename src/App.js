import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About" contactText="Contact" homeText="Home" /> */}
      <Navbar title="TextUtils" />
      <div className='container mx-auto'>
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
