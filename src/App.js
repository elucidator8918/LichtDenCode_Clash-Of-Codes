import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Form from "./pages/Form";
import SignUp from "./pages/SignUp";
import { useEffect } from "react";
import ProfilePage from "./pages/ProfilePage";
import Home from "./pages/Home";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/form":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<Login />} />

      <Route path="/form" element={<Form />} />

      <Route path="/ProfilePage" element={<ProfilePage />} />

      <Route path="/sign-up" element={<SignUp />} />
      
      <Route path="/home" element={<Home />}/>
    </Routes>
   
  );
}
export default App;
