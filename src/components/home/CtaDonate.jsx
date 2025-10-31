import { ArrowRight } from "lucide-react";

export default function CtaDonate({
  bg = "/images/about-two-img-2.jpg",
  arrowImg = "/images/cta-one-shape-1.png",
}) {
  return (
    <section className="px-4 py-8">
      <div className="relative overflow-hidden rounded-[28px]">
        <div
          className="absolute inset-0 scale-105 animate-[kenburns_18s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#138808]/40" />

        <div className="relative z-10 grid place-items-center text-center min-h-[320px] sm:min-h-[360px] md:min-h-[400px] px-6">
          <h2 className="max-w-3xl text-white font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl">
            Join Us in the Fight Against
            <br /> Poverty Support
          </h2>

          <div className="relative mt-6 sm:mt-8">
            <button
              className="group relative inline-flex items-center gap-3 rounded-full border border-[#FF9933] bg-white/10 px-6 py-3 text-white font-semibold backdrop-blur
                         hover:bg-[#FF9933] hover:border-[#FF9933] transition-all
                         hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(249,115,22,.65)]"
            >
              <span>Donate Now</span>

              <span className="relative grid place-items-center w-8 h-8 rounded-full bg-white text-[#FF9933]">
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                <span className="absolute inset-0 rounded-full border border-white/60 animate-[pulseRing_1.8s_ease-out_infinite]" />
              </span>

              <span className="pointer-events-none absolute inset-0 rounded-full overflow-hidden">
                <span
                  className="absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/20 translate-x-0 opacity-0
                                  group-hover:opacity-100 group-hover:translate-x-[220%] transition-all duration-700"
                />
              </span>
            </button>

            <img
              src={arrowImg}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-[calc(100%+12px)] -translate-y-1/2 w-24 h-auto
                         animate-[wiggleImg_1.05s_ease-in-out_infinite] drop-shadow-[0_1px_0_rgba(0,0,0,.25)]"
            />
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes kenburns {
          0%   { transform: scale(1.06); }
          100% { transform: scale(1.12); }
        }
        /* keep the image centered vertically and wiggle horizontally */
        @keyframes wiggleImg {
          0%,100% { transform: translateY(-50%) translateX(0); }
          25%     { transform: translateY(-50%) translateX(-8px); }
          75%     { transform: translateY(-50%) translateX(8px); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(0.8); opacity: .65; }
          70%  { transform: scale(1.4); opacity: 0; }
          100% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
