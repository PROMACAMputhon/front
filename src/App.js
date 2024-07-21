import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/common/Header";
import MainPage from "./pages/mainPage";

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/ai" element={<Chatting />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
