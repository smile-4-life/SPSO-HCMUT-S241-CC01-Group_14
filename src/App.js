import { Route, Routes } from "react-router-dom";
import UserRoute from "./routes/user";
import LoginPage from "./pages/LoginPage";
import AdminRoute from "./routes/admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<LoginPage />} />
        <Route path="/user/*" element={<UserRoute />} />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </>
  )
}

export default App