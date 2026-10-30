import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Collection from "./pages/CollectionPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AppErrorBoundary from "./components/AppErrorBoundary.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AppErrorBoundary>
        <AuthProvider>
          <div
            className="min-h-screen w-full mode "
            data-scroll
            data-scroll-speed="1"
          >
            <Routes>
              <Route
                path="/"
                element={
                  // <ProtectedRoute>
                  <Homepage />
                  // </ProtectedRoute>
                }
              />
              <Route
                path="/collection"
                element={
                  // <ProtectedRoute>
                  <Collection />
                  // </ProtectedRoute>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </AuthProvider>
      </AppErrorBoundary>
    </>
  );
}

export default App;
