import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import RequestForm from "./components/RequestForm/RequestForm";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/RequestForm" element={<RequestForm />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
       </Route>
    </Routes>
  );
}

export default App;