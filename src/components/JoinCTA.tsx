import { siteConfig } from '@/lib/config'

export default function JoinCTA() {
  return (
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
                {['🎉', '🚀', '✨', '💬', '🎮'].map((e, i) => (
                  <span
                    key={i}
                    className="animate-float"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    {e}
                  </span>
                ))}
              </div>

              <h2 className="font-display text-5xl md:text-6xl text-white mb-4 leading-tight">
                Ready to join the<br />
                <span className="bg-gradient-to-r from-[#FF5F57] to-[#FFD166] bg-clip-text text-transparent">
                  good vibes?
                </span>
              </h2>

              <p className="text-[#8892B0] text-lg mb-10 max-w-md mx-auto leading-relaxed">
                Over {siteConfig.memberCount} members are waiting to welcome you. It takes 10 seconds to join.
              </p>

              <a
                href={siteConfig.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#FF5F57] text-white font-bold text-xl shadow-xl hover:shadow-[#FF5F57]/40 hover:scale-105 hover:bg-[#ff4038] transition-all duration-200"
              >
                <DiscordIcon className="w-7 h-7" />
                Join {siteConfig.name} Free
                <span>🎉</span>
              </a>

              <p className="text-[#8892B0]/70 text-xs mt-5">
                Free forever · No credit card · Just good people
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028z" />
    </svg>
  )
}
