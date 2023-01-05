import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todo from "./pages/Todo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="pt-3">
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/todos" element={<Todo />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
