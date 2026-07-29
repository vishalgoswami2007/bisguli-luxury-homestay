import { Star } from "lucide-react";
import Container from "../common/Container";

function Testimonials() {
  const reviews = [
    {
      name: "Bhaskar Goswami",
      city: "FaridaBad",
      text:
        "A peaceful place away from city life. The orchards, fresh food and hospitality made our trip unforgettable.",
    },
    {
      name: "Sheetal Goswami",
      city: "Rudrapur",
      text:
        "The sunrise views were magical. Staying in a traditional village home felt completely different from hotels.",
    },
    {
      name: "Kavita Goswami",
      city: "Rohtak",
      text:
        "If you love nature and quiet places, Bisguli is a hidden gem. We will definitely visit again.",
    },
  ];

  return (
    <section className="bg-[#F7F3E8] py-24">
      <Container>
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14532D]">
            Guest Stories
          </p>

          <h2 className="heading-font mt-5 text-5xl text-[#102218]">
            Loved by every visitor
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[#687269] leading-8">
            Simple moments, beautiful memories and genuine village hospitality.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[28px] bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="flex gap-1 text-[#F0A14A]">
                <Star fill="#F0A14A" size={18} />
                <Star fill="#F0A14A" size={18} />
                <Star fill="#F0A14A" size={18} />
                <Star fill="#F0A14A" size={18} />
                <Star fill="#F0A14A" size={18} />
              </div>

              <p className="mt-6 leading-8 text-[#58655D]">
                "{review.text}"
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-[#102218]">
                  {review.name}
                </h3>

                <p className="text-sm text-[#7A847D]">
                  {review.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;