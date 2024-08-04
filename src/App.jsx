import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Zone Auth
import Login from "./zoneAuth/Login";
import Register from "./zoneAuth/Register";
import ResetPassword from "./zoneAuth/ResetPassword";

// Zone Public
import Home from "./zonePublic/Home";
import About from "./zonePublic/About";
import Cart from "./zonePublic/Cart";

// Zone Client
import Profile from "./zoneClient/Profile";

// Zone Admin
import Dashboard from "./zoneAdmin/Dashboard";
import GestionProduits from "./zoneAdmin/gestionProduits/GestionProduits";
import GestionCommandes from "./zoneAdmin/GestionCommandes";

// Layouts
import PublicLayout from "./layouts/PublicLayout";
import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";
import GuestLayout from "./layouts/GuestLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<GuestLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="Cart" element={<Cart />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="gestion-produits" element={<GestionProduits />} />
          <Route path="gestion-commandes" element={<GestionCommandes />} />
        </Route>
        <Route path="/client" element={<ClientLayout />}>
          <Route index element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}
