import { HashRouter, Routes, Route } from "react-router-dom";
import { Register } from "../views/Register";
import { Login } from "../views/Login";
import { Dashboard } from "../views/Dashboard";
import { PrivateRoute } from "../components/PrivateRoute";
import { Home } from "../views/Home";
import { NotFound } from "../views/NotFound";

const RouterApp = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export { RouterApp };
