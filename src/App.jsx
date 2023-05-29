import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/Home/Home.jsx";
import TicketsPage from "./pages/Tickets/Tickets.jsx";


function App() {
  const { destination_id } = useParams();

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tickets/:destination_id" element={<TicketsPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
