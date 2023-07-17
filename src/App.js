import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routers/Home"
import About from "./routers/About";
import Navigation from "./components/Navigation";
import Detail from "./routers/Detail";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie-detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;