import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/Login";
import AdminDashboard from "./Components/pages/AdminDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
