import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header.jsx';
import Landing from './components/landing.jsx';
import Footer from './components/footer.jsx';
import Section1 from './components/main-section1.jsx';
import Section2 from './components/main-section2.jsx';
import Section3 from './components/main-section3.jsx';
import AboutPage from './components/aboutpage';
import Services from './components/services';
import Prices from './components/prices';
import Gallery from './components/gallery';


export default function App() {
  return (
    <div className='app'>
		<Landing />
		<Footer />
	</div>

);
}


//this is the links to other pages
ReactDOM.render(

  <Router>
  <Header/>
    <Routes>
      <Route path="/" element={<>
      <Landing />
      <Section1 />
      <Section2 />
      <Section3 />

  		</>} />
      <Route path="/aboutpage" element={<AboutPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/gallery" element={<Gallery />} />



    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
