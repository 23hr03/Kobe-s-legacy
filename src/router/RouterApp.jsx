import {HashRouter, Routes,Route} from "react-router-dom"
import { Home } from "../views/Home"
import { Dashboard } from "../views/Dashboard"
import { Login } from "../views/Login"
import { Register } from "../views/Register"
import { NotFound } from "../views/NotFound"
import { PrivateRoute } from "../components/PrivateRoute"

const RouterApp = () => {
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Register />} />  {/* página inicial */}
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}
export {RouterApp}