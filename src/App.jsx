// rafce -> shortcut to create component and export
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AdminPage from "./pages/admin/";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import Committee from "./pages/officers/Committee";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JoinUs from "./pages/joinUs/JoinUs";
import Activities from "./pages/activities/Activities";
import ServiceLocatorProvider from "./services/ServiceLocatorProvider";
import LoginForm from "./pages/login/LoginForm";
import Events from "./pages/events/Events";

const App = () => {
  return (
    <ServiceLocatorProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="about" element={<About />} />
          <Route path="activities" element={<Activities />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
          <Route path="joinus" element={<JoinUs />} />
          <Route path="committee" element={<Committee />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ServiceLocatorProvider>
  );
};

export default App;
