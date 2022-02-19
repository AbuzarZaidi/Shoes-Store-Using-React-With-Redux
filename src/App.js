import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Layout from './components/Layout/Layout';
import Contact from './pages/Contact';
import Store from "./pages/Store";
function App() {
  return (
  <>
  <Layout>
  <Routes>  
  <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/store" element={<Store/>} />
        </Routes>
  </Layout>

  </>
  );
}

export default App;
