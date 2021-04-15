import './App.css';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Intro from './Component/Intro';

function App() {
  return (
    <div className="App">
          <Navbar />    
          <Intro /> 
          <Main /> 
          <Footer />
    </div>
  );
}

export default App;



