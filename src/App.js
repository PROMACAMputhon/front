import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import MainPage from "./pages/mainPage";
import ChattingPage from "./pages/chattingPage";
import ExplainPage from "./pages/explainPage";
import LoginPage from "./components/User/LoginPage";
import SignUpPage from "./components/User/SignUpPage";
import AuthCheck from "./util/authCheck";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/ai"
          element={
            <AuthCheck>
              <ChattingPage />
            </AuthCheck>
          }
        />
        <Route path="/ai/explain" element={<ExplainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
