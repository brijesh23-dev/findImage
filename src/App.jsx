import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Collection from "./pages/CollectionPage.jsx";
import { ToastContainer, Bounce } from "react-toastify";  
import LocomotiveScroll from "locomotive-scroll";
const locomotiveScroll = new LocomotiveScroll();

function App() {
  return (
    <>
      <div
        className="min-h-screen w-full mode "
        data-scroll
        data-scroll-speed="1"
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/collection" element={<Collection />} />
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
    </>
  );
}

export default App;
