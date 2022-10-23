import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import HomeScreen from "./Components/HomeScreen/Index";
import QuizComponent from "./Components/QuizComponent/QuizComponent";
import CongratsModal from "./Components/ResultComponent/CongratsModal";
import ResultComponent from "./Components/ResultComponent/Index";
import {BE_URL} from "./const"

function App() {
  useEffect(() => {
    (async () => {
      const initialPing = await axios.get(
        `${BE_URL}/`
      );
    })();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/result" element={<ResultComponent />} />
        <Route path="/modal" element={<CongratsModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
