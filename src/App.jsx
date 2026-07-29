import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Homestay from "./pages/Homestay";
import LoadingScreen from "./components/common/LoadingScreen";
import HomestayGallery from "./components/homestay/HomestayGallery"
import Packages from "./pages/Packages";

function App() {
  return (
    <>
      <LoadingScreen />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homestay" element={<Homestay />} />
        <Route path="/homestay" element={<Homestay />} />
        <Route path="/homestay/gallery" element={<HomestayGallery />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </>
  );
}

export default App;