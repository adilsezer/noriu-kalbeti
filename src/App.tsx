import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { useAuthContext } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";
import Loader from "./components/ui/Loader";
import BookLesson from "./pages/BookLesson/BookLesson";
import FAQ from "./pages/FAQ/FAQ";

export default function App() {
  const { isAuthenticated, loading, user } = useAuthContext();

  // Show loader while authentication is loading
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        {/* Define routes for the application */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-lesson" element={<BookLesson />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {isAuthenticated && user?.isAdmin && (
            <Route path="/noriu-kalbeti-admin" element={<Admin />} />
          )}

          {isAuthenticated ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Dashboard />} />
              <Route path="/signup" element={<Dashboard />} />
              <Route path="/forgot-password" element={<Dashboard />} />
              <Route path="*" element={<PageNotFound />} />
            </>
          ) : (
            <>
              <Route path="/dashboard" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={<PageNotFound />} />
            </>
          )}
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}
