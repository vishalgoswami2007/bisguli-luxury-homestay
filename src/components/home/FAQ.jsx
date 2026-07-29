import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Container from "../common/Container";

function FAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "How do I book a stay?",
      a: "Simply choose an available date and contact us through WhatsApp.",
    },
    {
      q: "Are meals included?",
      a: "Fresh homemade Kumaoni meals are available during your stay.",
    },
    {
      q: "Best season to visit?",
      a: "March to June for fruits and October to December for peaceful weather.",
    },
    {
      q: "Can families visit?",
      a: "Yes, the homestay is family-friendly and suitable for all age groups.",
    },
  ];

  return (
    <section className="bg-[#071A12] py-24 text-white">
      <Container>
        <div className="text-center">
          <h2 className="heading-font text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-white/60">
            Everything you need before visiting Bisguli.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="rounded-3xl border border-white/10 bg-white/5"
            >
              <button
                onClick={() => setOpen(index)}
                className="flex w-full items-center justify-between p-6"
              >
                <span className="text-left font-semibold">
                  {faq.q}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-white/60 leading-8">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;