
import './App.css';
import {
 
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import Questions from "./pages/questions/Questions";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
       <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/questions" element={<Questions />} />
        
    </Routes>
    <Footer />

    </div>
  );
}

export default App;
