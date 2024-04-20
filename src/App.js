import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import './assets/css/vendor/bootstrap.min.css';
import './assets/css/plugins/animation.css';
import './assets/css/plugins/feature.css';
import './assets/css/plugins/magnify.min.css';
import './assets/css/plugins/slick.css';
import './assets/css/plugins/slick-theme.css';
import './assets/css/plugins/lightbox.css';
import './assets/css/style.css';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './Pages/Projects';
import ProjectDetails from './Pages/ProjectDetails';
import Services from './Pages/Services';
// import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
        {/* <Route path="/ourservices" element={<Services />} /> */}

      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
