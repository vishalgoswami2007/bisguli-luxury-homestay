import Container from "../common/Container";
import { useNavigate } from "react-router-dom";

const images = [
  "/homestay/images/room1.jpg",
  "/homestay/images/room2.jpg",
  "/homestay/images/room3.jpg",
  "/homestay/images/room4.jpg",
  "/homestay/images/room5.jpg",
];



function RoomGallery() {

  const navigate = useNavigate();


  return (
    <section className="bg-[#06110B] py-24">
      <Container>
        {/* Heading */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#F0A14A]">
            Gallery
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#F8F0DF] lg:text-5xl">
            Explore Every Corner
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/60">
            Every room, every window and every morning opens to the beauty of
            the Himalayas.
          </p>
        </div>

        {/* Gallery */}

        <div className="grid gap-5 lg:grid-cols-4">
          {/* Large Image */}

          <div className="overflow-hidden rounded-[30px] lg:col-span-2 lg:row-span-2">
            <img
              src={images[0]}
              alt="Room"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Small Images */}

          {images.slice(1).map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-24px"
            >
              <img
                src={image}
                alt={`Gallery ${index + 2}`}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to from-black/60 via-black/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-5 left-5 translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-lg font-semibold text-white">
                  View Image
                </h3>

                <p className="text-sm text-white/70">
                  Himalayan Homestay
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Card */}

        <div className="mt-12 rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-[#F8F0DF]">
                Experience Authentic Village Living
              </h3>

              <p className="mt-3 max-w-2xl text-white/60">
                Spacious rooms, mountain views, peaceful surroundings and warm
                hospitality await you at Bisguli Homestay.
              </p>
            </div>

            <button
              onClick={() => navigate("/homestay/gallery")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F0A14A]/30 bg-[#F0A14A] px-7 py-3 text-sm font-semibold text-[#07140D] transition-all duration-300 hover:scale-105 hover:bg-[#F6B35E] hover:shadow-[0_15px_35px_rgba(240,161,74,0.35)]"
            >
              View Full Gallery
            </button>

          </div>
        </div>
      </Container>
    </section>
  );
}

export default RoomGallery;