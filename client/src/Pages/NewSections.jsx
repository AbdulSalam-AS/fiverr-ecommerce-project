import { FaStar, FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

/* ─────────────────────────────────────────────
   SECTION 1 — TESTIMONIALS
   Paste this block right after the Headset section
───────────────────────────────────────────── */
export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jordan Miles",
      role: "Music Producer",
      rating: 5,
      text: "The Elite Studio headphones completely transformed my workflow. The studio-grade clarity is unreal — I can catch every micro-detail in my mixes.",
      avatar: "/profile1.avif",
      product: "Elite Studio",
      highlight: true,
    },
    {
      name: "Sofia Reyes",
      role: "Podcast Creator",
      rating: 5,
      text: "GO-SPEAKER goes everywhere with me. Waterproof, loud, and the battery lasts my entire hiking trip. Best $89 I've ever spent.",
      avatar: "/profile2.jpg",
      product: "GO-SPEAKER",
      highlight: false,
    },
    {
      name: "Liam Chen",
      role: "Audiophile",
      rating: 5,
      text: "New Gen X-Buds are insane. Noise-cancellation that actually works on the subway — I feel like I'm in my own world every commute.",
      avatar: "/profile3.jpg",
      product: "New Gen X-Bud",
      highlight: false,
    },
    {
      name: "Amara Osei",
      role: "Content Creator",
      rating: 4,
      text: "Sleek design, incredible sound. The Blue Headset paired with my setup looks and sounds like a professional studio rig.",
      avatar: "/profile1.avif",
      product: "Blue Headset",
      highlight: false,
    },
  ];

  return (
    <div className="h-full max-w-full mt-16 mb-25">
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div className="flex flex-col gap-1">
          <h1 className="sm:text-2xl lg:text-5xl font-medium">
            What Listeners Say
          </h1>
          <p className="text-black/50 lg:text-2xl">
            Real reviews from real audiophiles
          </p>
        </div>
        <button className="text-blue-300 cursor-pointer text-[0.9rem] flex items-center gap-1 hover:text-blue-400 transition-colors">
          View All <IoIosArrowForward />
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`relative rounded-3xl p-6 flex flex-col gap-4 transition-all duration-200 ease-in-out hover:scale-[1.03] cursor-pointer ${
              t.highlight
                ? "bg-black text-white"
                : "bg-gray-100 text-black"
            }`}
            style={{ boxShadow: "2px 2px 12px rgba(0,0,0,0.10)" }}
          >
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, si) => (
                <FaStar
                  key={si}
                  className={`size-4 ${
                    si < t.rating
                      ? "text-lime-300"
                      : t.highlight
                      ? "text-white/20"
                      : "text-black/10"
                  }`}
                />
              ))}
            </div>

            {/* Quote */}
            <p
              className={`text-[0.95rem] leading-relaxed flex-1 ${
                t.highlight ? "text-white/80" : "text-black/70"
              }`}
            >
              "{t.text}"
            </p>

            {/* Product Tag */}
            <span
              className={`self-start text-[0.7rem] font-bold px-3 py-1 rounded-full ${
                t.highlight
                  ? "bg-lime-300 text-black"
                  : "bg-black text-white"
              }`}
            >
              {t.product}
            </span>

            {/* Author */}
            <div className="flex items-center gap-3 mt-1 border-t pt-4 ${t.highlight ? 'border-white/10' : 'border-black/10'}">
              <div
                className={`p-[3px] rounded-full ${
                  t.highlight ? "bg-lime-300" : "bg-black"
                }`}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-[0.9rem]">{t.name}</p>
                <p
                  className={`text-[0.75rem] ${
                    t.highlight ? "text-white/50" : "text-black/40"
                  }`}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const NewsletterSection = () => {
  return (
    <div className="h-full max-w-full mt-10 mb-10">
      <div
        className="bg-black rounded-3xl px-8 py-12 md:px-16 lg:px-20 lg:py-16 relative overflow-hidden"
        style={{ boxShadow: "2px 2px 20px rgba(0,0,0,0.20)" }}
      >
        {/* Decorative blobs */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-lime-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-lime-300/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — Copy */}
          <div className="flex flex-col gap-5">
            <span className="self-start bg-lime-300 text-black text-[0.7rem] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
              Stay in the Loop
            </span>
            <h2 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight">
              Drop Before{" "}
              <span className="text-lime-300">Everyone</span>
              <br />
              Else Hears It.
            </h2>
            <p className="text-white/50 text-[1rem] md:text-[1.1rem] max-w-md">
              Get exclusive early access to new gear drops, limited-edition
              colorways, and members-only deals — straight to your inbox.
            </p>
            <div className="flex gap-3 flex-wrap text-white/40 text-[0.85rem]">
              <span>✓ No spam, ever</span>
              <span>✓ Unsubscribe anytime</span>
              <span>✓ 5m+ subscribers</span>
            </div>
          </div>

          {/* Right — Input */}
          <div className="flex flex-col gap-4">
            <div
              className="flex items-center bg-white/10 border border-white/15 rounded-2xl px-4 py-1 gap-3 focus-within:border-lime-300 transition-colors duration-200"
            >
              <input
                type="text"
                placeholder="Your first name"
                className="bg-transparent text-white placeholder-white/30 text-[0.95rem] py-3 flex-1 outline-none"
              />
            </div>
            <div
              className="flex items-center bg-white/10 border border-white/15 rounded-2xl px-4 py-1 gap-3 focus-within:border-lime-300 transition-colors duration-200"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent text-white placeholder-white/30 text-[0.95rem] py-3 flex-1 outline-none"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-lime-300 text-black font-bold text-[0.95rem] py-4 px-8 rounded-2xl cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:bg-lime-200 mt-1">
              Join the Community
              <FaArrowRight className="size-4" />
            </button>
            <p className="text-white/25 text-[0.75rem] text-center">
              Already 5,000+ new members this month. Your inbox is about to level up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
