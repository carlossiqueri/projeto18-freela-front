import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/Home/Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
