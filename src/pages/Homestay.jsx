import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HomestayHero from "../components/homestay/HomestayHero";
import RoomGallery from "../components/homestay/RoomGallery";
import RoomDetails from "../components/homestay/RoomDetails";
import Amenities from "../components/homestay/Amenities";
import HomeGallery from "../components/homestay/HomestayGallery"

function Homestay() {
  return (
    <>
      <Navbar />

      <main className="bg-[#03150D]">
        <HomestayHero />
        <RoomGallery />
        <RoomDetails />
        <Amenities />
      </main>

      <Footer />
    </>
  );
}

export default Homestay;