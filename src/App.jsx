import React, { Suspense, lazy } from "react";
const AdminSidebar = lazy(() =>
  import("./admin/admin_dashboard/pages/dashboard/AdminSidebar")
);
const WebsiteTemplate = lazy(() =>
  import("./client/pages/website_template/WebsiteTemplate")
);
const AdminTmpDetails = lazy(() =>
  import("./client/pages/admin_tmp_details/AdminTmpDetails")
);
const ServiceReques = lazy(() =>
  import("./client/pages/service_request/ServiceReques")
);
const AdminTemplate = lazy(() =>
  import("./client/pages/admin_template/AdminTemplate")
);
const CookiePolicy = lazy(() =>
  import("./client/pages/cookie_policy/CookiePolicy")
);
const PostDetails = lazy(() =>
  import("./client/pages/post_details/PostDetails")
);
const HelpSupport = lazy(() =>
  import("./client/pages/help_support/HelpSupport")
);
const AdminLogin = lazy(() => import("./admin/admin_dashboard/auth/Login"));
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./admin/admin_dashboard/auth/AuthContext";
const WpPlugin = lazy(() => import("./client/pages/wp_plugin/WpPlugin"));
const Category = lazy(() => import("./client/pages/category/Category"));
const WpTheme = lazy(() => import("./client/pages/wp_theme/WpTheme"));
const Contact = lazy(() => import("./client/pages/contact/Contact"));
const Service = lazy(() => import("./client/pages/service/Service"));
const Privacy = lazy(() => import("./client/pages/privacy/Privacy"));
const About = lazy(() => import("./client/pages/About/About"));
const Home = lazy(() => import("./client/pages/home/Home"));
const Faq = lazy(() => import("./client/pages/faq/Faq"));
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "react-quill/dist/quill.snow.css";
import "./assets/css/style.css";
const App = () => {
  return (
    <main>
      <ToastContainer />
      <AuthProvider>
        <Suspense fallback={() => <h1>Loading...</h1>}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:slug" element={<PostDetails />} />
              <Route path="/category/:slug" element={<Category />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/help_support" element={<HelpSupport />} />
              <Route path="/privacy_policy" element={<Privacy />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/admin_template" element={<AdminTemplate />} />
              <Route
                path="/admin_template/:slug"
                element={<AdminTmpDetails />}
              />
              <Route path="/website_template" element={<WebsiteTemplate />} />
              <Route path="/wp_theme" element={<WpTheme />} />
              <Route path="/wp_plugin" element={<WpPlugin />} />
              <Route path="/cookie_policy" element={<CookiePolicy />} />
              <Route path="/service_request" element={<ServiceReques />} />
              <Route path="/admin/dashboard" element={<AdminSidebar />} />
              <Route path="/admin" element={<AdminLogin />} />
            </Routes>
          </Router>
        </Suspense>
      </AuthProvider>
    </main>
  );
};

export default App;
