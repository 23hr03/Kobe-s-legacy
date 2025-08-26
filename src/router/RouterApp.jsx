import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../views/Home";
import { Dashboard } from "../views/Dashboard";
import { Login } from "../views/Login";
import { Register } from "../views/Register";
import { NotFound } from "../views/NotFound";
import { PrivateRoute } from "../components/PrivateRoute";

const RouterApp = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      {/* Redirige la raíz a /register */}
      <Route path="/" element={<Navigate to="/register" />} />

      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Para rutas no existentes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export { RouterApp };
