import { useState } from "react";
import {
  Calendar,
  Users,
  Mountain,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import Container from "../common/Container";

function PlanStayQuiz() {
  const [season, setSeason] = useState("");
  const [people, setPeople] = useState("");
  const [interest, setInterest] = useState("");
  const [result, setResult] = useState(null);

  function generatePlan() {
    if (!season || !people || !interest) {
      alert("Please complete all fields.");
      return;
    }

    let recommendation = "";

    if (interest === "Nature") {
      recommendation =
        "Perfect for peaceful walks, forests and mountain views.";
    }

    if (interest === "Fruit Season") {
      recommendation =
        "Visit during mango, peach and plum season for the best orchard experience.";
    }

    if (interest === "Adventure") {
      recommendation =
        "Enjoy village trails, nearby hills and outdoor exploration.";
    }

    if (interest === "Photography") {
      recommendation =
        "Golden sunrise, mountain landscapes and village life are perfect for photography.";
    }

    setResult(recommendation);
  }

  return (
    <section
      id="planner"
      className="bg-[#F7F3E8] py-24"
    >
      <Container>

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-[#14532D]/10 px-5 py-2 text-sm font-semibold text-[#14532D]">
            <Sparkles size={16}/>
            Plan Your Stay
          </div>

          <h2 className="heading-font mt-6 text-5xl text-[#102218]">
            Find your perfect village experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[#5F6B64] leading-8">
            Answer a few simple questions and we'll recommend the best experience in Bisguli.
          </p>

        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Left Card */}

          <div className="rounded-32px bg-white p-10 shadow-xl">

            <div className="space-y-8">

              <div>

                <label className="mb-3 flex items-center gap-2 font-semibold text-[#102218]">

                  <Calendar size={18}/>

                  Preferred Season

                </label>

                <select
                  value={season}
                  onChange={(e)=>setSeason(e.target.value)}
                  className="w-full rounded-xl border p-4 outline-none"
                >
                  <option value="">Select</option>

                  <option>Spring</option>

                  <option>Summer</option>

                  <option>Monsoon</option>

                  <option>Winter</option>

                </select>

              </div>

              <div>

                <label className="mb-3 flex items-center gap-2 font-semibold text-[#102218]">

                  <Users size={18}/>

                  Number of Guests

                </label>

                <select
                  value={people}
                  onChange={(e)=>setPeople(e.target.value)}
                  className="w-full rounded-xl border p-4 outline-none"
                >

                  <option value="">Select</option>

                  <option>1-2</option>

                  <option>3-5</option>

                  <option>6+</option>

                </select>

              </div>

              <div>

                <label className="mb-3 flex items-center gap-2 font-semibold text-[#102218]">

                  <Mountain size={18}/>

                  Main Interest

                </label>

                <select
                  value={interest}
                  onChange={(e)=>setInterest(e.target.value)}
                  className="w-full rounded-xl border p-4 outline-none"
                >

                  <option value="">Select</option>

                  <option>Nature</option>

                  <option>Fruit Season</option>

                  <option>Adventure</option>

                  <option>Photography</option>

                </select>

              </div>

              <button
                onClick={generatePlan}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#14532D] py-4 font-semibold text-white transition hover:bg-[#0E4022]"
              >
                Generate Recommendation
                <ArrowRight size={18}/>
              </button>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-32px bg-[#071A12] p-10 text-white shadow-xl">

            <h3 className="heading-font text-4xl">
              Your Recommendation
            </h3>

            <p className="mt-5 text-white/60 leading-8">

              Fill the form to receive your personalized village travel suggestion.

            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">

              {result ? (

                <>
                  <h4 className="text-2xl font-semibold text-[#F0A14A]">
                    Perfect Choice 🌿
                  </h4>

                  <p className="mt-5 leading-8 text-white/70">

                    {result}

                  </p>

                </>

              ) : (

                <div className="py-16 text-center text-white/40">

                  Recommendation will appear here.

                </div>

              )}

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default PlanStayQuiz;