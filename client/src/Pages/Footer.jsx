import { FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 w-full">

      {/* ── Big CTA row ── */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-10 border-b border-black/10 ">
        <h2 className="font-extrabold text-[2.8rem] md:text-[4rem] lg:text-[5.5rem] leading-none tracking-tight max-w-3xl">
          Ready to Hear<br />
          <span className="relative inline-block">
            Something New
            <span className="absolute -bottom-2 left-0 h-2 w-full bg-lime-300 -z-10 rounded-full" />
          </span>
          ?
        </h2>
        <button className="flex items-center gap-3 bg-black text-white font-bold text-[0.95rem] px-7 py-4 rounded-2xl cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-lime-300 hover:text-black shrink-0 mb-2">
          Shop All Gear <FaArrowRight className="size-4" />
        </button>
      </div>

      {/* ── Middle grid ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-12 border-b border-black/10 bg-gray-100">

        {/* Brand */}
        <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-5 px-5">
          <div>
            <p className="font-extrabold text-2xl tracking-tight">Sequoia<span className="text-lime-400">.</span></p>
            <p className="text-black/40 text-sm mt-1">Sound for the relentless.</p>
          </div>
          <div className="flex gap-3">
            {[FaTwitter, FaTiktok, BsInstagram, FaLinkedin].map((Icon, i) => (
              <button
                key={i}
                className="w-9 h-9 rounded-xl border border-black/15 flex items-center justify-center text-black/50 hover:border-black hover:text-black hover:scale-110 transition-all duration-150 cursor-pointer"
              >
                <Icon className="size-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          {
            title: "Shop",
            items: ["Headphones", "Earbuds", "Speakers", "Microphones", "New Arrivals"],
          },
          {
            title: "Support",
            items: ["Track Order", "Returns", "Warranty", "Contact Us", "FAQ"],
          },
          {
            title: "Company",
            items: ["About Us", "Careers", "Press", "Sustainability", "Blog"],
          },
        ].map(({ title, items }) => (
          <div key={title} className="flex flex-col gap-4 px-5">
            <p className="font-bold text-[0.78rem] tracking-widest uppercase text-black/35">{title}</p>
            <ul className="flex flex-col gap-2.5">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[0.9rem] text-black/60 hover:text-black transition-colors duration-150 font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-7 pb-6 px-5 bg-gray-100">
        <p className="text-black/30 text-[0.8rem]">
          © {new Date().getFullYear()} Sequoia Musico. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
            <a key={item} href="#" className="text-black/35 text-[0.8rem] hover:text-black transition-colors duration-150">
              {item}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
