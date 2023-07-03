import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/location/:id" element={<Location />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
