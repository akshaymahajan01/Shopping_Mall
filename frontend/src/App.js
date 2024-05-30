import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import useUserRoutes from "./components/routes/userRoutes";
import useAdminRoutes from "./components/routes/adminRoutes";
import NotFound from "./components/layout/NotFound";


function App() {

  const userRoutes = useUserRoutes();
  const adminRoutes = useAdminRoutes();

  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />

        <Routes>

          {userRoutes}
          {adminRoutes}
          <Route path="*" element={<NotFound />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}


// Component to provide a container for other components
function WithContainer({ children }) {
  return <div className="container">{children}</div>;
}

export default App;
