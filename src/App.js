import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import MainPage from "./pages/mainPage";
import ChattingPage from "./pages/chattingPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ai" element={<ChattingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
