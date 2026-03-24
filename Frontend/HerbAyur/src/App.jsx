import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import RequestForm from "./components/RequestForm/RequestForm";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/RequestForm" element={<RequestForm />} />
        <Route path="/Contact" element={<Contact />} />
       </Route>
    </Routes>
  );
}

export default App;