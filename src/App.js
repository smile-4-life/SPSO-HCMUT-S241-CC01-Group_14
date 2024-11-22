import { Route, Routes } from "react-router-dom";
import UserRoute from "./routes/user";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<LoginPage />} />
        <Route path="/user/*" element={<UserRoute />} />
      </Routes>
    </>
  )
}

export default App