import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './components/landing.jsx';
import Footer from './components/footer.jsx';


export default function App() {
  return (
    <div className='app'>
		<Landing />
		<Footer />
	</div>

);
}

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

//this is the links to other pages
ReactDOM.render(

  <Router>
    <Routes>
      <Route path="/" element={<>
  		<Landing />
  		</>} />

    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
