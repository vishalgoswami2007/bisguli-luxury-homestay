import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "../common/Container";

function Footer() {
  return (
    <footer className="bg-[#04110B] text-white">

      <Container>

        <div className="grid gap-14 border-b border-white/10 py-20 lg:grid-cols-4">

          {/* Logo */}

          <div>

            {/* ========= LOGO ========= */}

            <img
              src="/logo.png"
              alt="Bisguli"
              className="h-20 w-auto object-contain"
            />

            <h2 className="heading-font mt-6 text-3xl">
              Bisguli
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              Experience authentic Himalayan village life, fresh orchards,
              peaceful homestays and unforgettable memories.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-semibold text-xl">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4 text-white/60">

              <a href="#home" className="block hover:text-[#F0A14A]">
                Home
              </a>

              <a href="#explore" className="block hover:text-[#F0A14A]">
                Explore
              </a>

              <a href="#planner" className="block hover:text-[#F0A14A]">
                Plan Your Stay
              </a>

              <a href="#availability" className="block hover:text-[#F0A14A]">
                Availability
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-semibold text-xl">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex gap-3">

                <Phone size={18} />

                {/* PHONE CHANGE KARNA */}
                +91 9588559330

              </div>

              <div className="flex gap-3">

                <Mail size={18} />

                {/* EMAIL CHANGE KARNA */}
                AERQONBusiness@gmail.com

              </div>

              <div className="flex gap-3">

                <MapPin size={18} />

                Bisguli, Talli Sethi,
                Betalghat,
                Uttarakhand

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="font-semibold text-xl">
              Follow Us
            </h3>

            <div className="mt-8 flex gap-5">

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 hover:bg-[#F0A14A] hover:text-black transition"
              >
                
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 hover:bg-[#F0A14A] hover:text-black transition"
              >
               
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-white/50 lg:flex-row">

          <p>
            © {new Date().getFullYear()} Bisguli. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by ❤️ AERQON
          </p>

        </div>

      </Container>

    </footer>
  );
}

export default Footer;