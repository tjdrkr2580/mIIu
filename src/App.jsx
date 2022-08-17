import "./app.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Musics from "./routes/Musics/Musics";

function App() {
  return (
    <div className="miiu-wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Musics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
