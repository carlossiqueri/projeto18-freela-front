import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/Home/Home.jsx";
import TicketsPage from "./pages/Tickets/Tickets.jsx";
import { HotelsPage } from "./pages/Hotels/Hotels.jsx";
import { SelectedTicketPage } from "./pages/Tickets/SelectedTicketPage.jsx";

function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tickets/:destination_id" element={<TicketsPage />} />
          <Route path="/tickets/details/:flight_id" element={<SelectedTicketPage /> } />
          <Route path="/hotels/:destination_id" element={<HotelsPage /> }/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
