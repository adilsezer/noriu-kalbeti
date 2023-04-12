import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import { useAuthContext } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import WhyNoriuKalbeti from "./pages/WhyNoriuKalbeti/WhyNoriuKalbeti";
import BookLesson from "./pages/BookLesson/BookLesson";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import LessonPlans from "./pages/LessonPlans/LessonPlans";

function App() {
  const { isAuthenticated, loading } = useAuthContext();

  if (loading) {
    return (
      <div>
        <ClipLoader size={50} />
      </div>
    );
  }

  return (
    <>
      <div>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Dashboard />} />
              <Route path="/signup" element={<Dashboard />} />
              <Route path="/forgot-password" element={<Dashboard />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/why-noriu-kalbeti" element={<WhyNoriuKalbeti />} />
              <Route path="/book-lesson" element={<BookLesson />} />
              <Route path="/lesson-plans" element={<LessonPlans />} />
              <Route path="*" element={<PageNotFound />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-profile" element={<Login />} />
              <Route path="/why-noriu-kalbeti" element={<WhyNoriuKalbeti />} />
              <Route path="/book-lesson" element={<Login />} />
              <Route path="/lesson-plans" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </>
          )}
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
