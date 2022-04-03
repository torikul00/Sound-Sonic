
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard'
import Reviews from './components/Reviews/Reviews'
import Blogs from './components/Blogs/Blogs'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='reviews' element ={<Reviews />} />
        <Route path='blogs' element ={<Blogs />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
