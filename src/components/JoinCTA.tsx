import { siteConfig } from "@/lib/config";
import DiscordIcon from '@/components/DiscordIcon'

export default function JoinCTA() {
  return (
    <>
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          {/* Card */}
          <div className="relative bg-gradient-to-br from-[#FF5F57] via-[#ff7a52] to-[#FFD166] rounded-3xl p-1 shadow-2xl shadow-[#FF5F57]/20">
            <div className="bg-[#12172A] rounded-[22px] p-14 text-center relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#FF5F57]/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#FFD166]/10 rounded-full blur-2xl" />
              </div>

              <div className="relative z-10">
                {/* Floating emoji row */}
                <div className="flex justify-center gap-4 text-3xl mb-8">
                  {["🎉", "🚀", "✨", "💬", "🎮"].map((e, i) => (
                    <span
                      key={i}
                      className="animate-float"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    >
                      {e}
                    </span>
                  ))}
                </div>

                <h2 className="font-display font-medium text-5xl md:text-6xl text-white mb-4 leading-tight">
                  Ready to join the
                  <br />
                  <span className="bg-gradient-to-r from-[#FF5F57] to-[#FFD166] bg-clip-text text-transparent">
                    good vibes?
                  </span>
                </h2>

                <p className="text-[#8892B0] text-md mb-10 max-w-md mx-auto leading-relaxed">
                  Over {siteConfig.memberCount} members are waiting to welcome
                  you. It takes 10 seconds to join.
                </p>

                <a
                  href={siteConfig.discordInvite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#FF5F57] text-white font-bold text-xl shadow-xl hover:shadow-[#FF5F57]/20 hover:scale-105 hover:bg-[#ff4038] transition-all duration-200"
                >
                  <DiscordIcon className="w-7 h-7" />
                  Join {siteConfig.name}
                  <span>🎉</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
