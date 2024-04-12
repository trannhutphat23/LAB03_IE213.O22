import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Bai7 from './pages/Bai7/Bai7';
import Bai8 from './pages/Bai8/Bai8';
import Bai9 from './pages/Bai9/Bai9';
import Bai10 from './pages/Bai10/Bai10';
import Bai11 from './pages/Bai11/Bai11';
import Bai12 from './pages/Bai12/Bai12';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>} />
            <Route path="/Bai7" element={<Bai7/>} />
            <Route path="/Bai8" element={<Bai8/>} />
            <Route path="/Bai9" element={<Bai9/>} />
            <Route path="/Bai10" element={<Bai10/>} />
            <Route path="/Bai11" element={<Bai11/>} />
            <Route path="/Bai12" element={<Bai12/>} />
          </Route>
        </Routes>            
      </BrowserRouter>
    </div>
  );
}

export default App;
