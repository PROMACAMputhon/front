import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import MainPage from "./pages/mainPage";
import Chatting from "./components/Chatting/Chatting";
import ExplainPage from "./pages/explainPage";
import LoginPage from "./components/User/LoginPage";
import SignUpPage from "./components/User/SignUpPage";
import ChattingPage from "./pages/chattingPage";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/ai" element={<Chatting/>}/>
                <Route path="/ai/explain" element={<ExplainPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
            </Routes>
        </BrowserRouter>
    );
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
