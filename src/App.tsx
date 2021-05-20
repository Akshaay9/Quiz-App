import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import QuizComponent from "./Components/QuizComponent/QuizComponent";
import ResultComponent from "./Components/ResultComponent/ResultComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/:id" element={<QuizComponent />} />
        <Route path="/result" element={<ResultComponent />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
