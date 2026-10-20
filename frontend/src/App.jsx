import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Collection from "./pages/CollectionPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AppErrorBoundary from "./components/AppErrorBoundary.jsx";
import { ToastContainer, Bounce } from "react-toastify";  

function App() {
  return (
    <>
      <AppErrorBoundary>
        <div
          className="min-h-screen w-full mode "
          data-scroll
          data-scroll-speed="1"
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />
        </div>
      </AppErrorBoundary>
    </>
  );
}

export default App;
