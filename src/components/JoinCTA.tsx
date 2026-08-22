import { siteConfig } from "@/lib/config";
import DiscordIcon from "@/components/DiscordIcon";

export default function JoinCTA() {
  return (
    <section
      className="relative isolate flex min-h-[760px] items-center overflow-hidden px-6 py-24 md:py-28"
      style={{
        background: `
          radial-gradient(
            circle at 30% 30%,
            rgba(255,255,255,.07) 0 2px,
            transparent 2.5px
          ) 0 0 / 18px 18px,
          linear-gradient(135deg, #7565f5 0%, #7564fa 53%, #6959ee 100%)
        `,
      }}
    >
      {/* MEMPHIS BACKGROUND BLOBS */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[105px] -top-[145px] -z-10 h-[330px] w-[410px] rotate-[-11deg]"
        style={{
          background: "var(--m-pink)",
          borderRadius: "42% 58% 67% 33% / 47% 38% 62% 53%",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[205px] -top-[175px] -z-10 h-[380px] w-[470px] rounded-full"
        style={{ background: "#6252df" }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[155px] -left-[225px] -z-10 h-[300px] w-[520px] rotate-[8deg]"
        style={{
          background: "var(--m-lavender, #aaa1ff)",
          borderRadius: "58% 42% 37% 63% / 43% 58% 42% 57%",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[135px] -right-[105px] -z-10 h-[205px] w-[820px] rotate-[-4deg]"
        style={{
          background: "var(--m-pink)",
          borderRadius: "51% 49% 0 0 / 55% 52% 0 0",
        }}
      />

      {/* HALFTONE DOTS */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-[90px] -z-10 h-[175px] w-[225px] opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 2px, transparent 2.6px)",
          backgroundSize: "17px 17px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-7 -z-10 h-[175px] w-[225px] opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #111118 2px, transparent 2.6px)",
          backgroundSize: "17px 17px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-4px] right-[26%] -z-10 h-[145px] w-[250px] opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 2px, transparent 2.6px)",
          backgroundSize: "17px 17px",
        }}
      />

      {/* MEMPHIS GEOMETRY */}

      {/* Yellow ring */}
      <div
        aria-hidden="true"
        className="absolute bottom-[22%] left-[8%] h-[59px] w-[59px] rounded-full border-[7px]"
        style={{ borderColor: "var(--m-mustard)" }}
      />

      {/* Small yellow circle */}
      <div
        aria-hidden="true"
        className="absolute bottom-[14%] right-[4.5%] h-[31px] w-[31px] rounded-full border-4"
        style={{
          borderColor: "var(--m-mustard)",
          background: "var(--m-mustard)",
        }}
      />

      {/* Pink square */}
      <div
        aria-hidden="true"
        className="absolute bottom-[26%] right-[9%] h-10 w-10 rotate-[14deg] border-[3px] border-white"
        style={{
          background: "var(--m-pink)",
          boxShadow: "5px 5px 0 #111118",
        }}
      />

      {/* Yellow triangle */}
      <div
        aria-hidden="true"
        className="absolute left-[7%] top-[38%] h-0 w-0"
        style={{
          borderLeft: "27px solid transparent",
          borderRight: "27px solid transparent",
          borderBottom: "47px solid var(--m-mustard)",
        }}
      />

      {/* Yellow plus */}
      <div
        aria-hidden="true"
        className="absolute right-[8.5%] top-[39%] h-[50px] w-[50px] rotate-[-11deg]"
      >
        <span
          className="absolute left-0 top-[19px] h-3 w-[50px] rounded-sm"
          style={{ background: "var(--m-mustard)" }}
        />
        <span
          className="absolute left-[19px] top-0 h-[50px] w-3 rounded-sm"
          style={{ background: "var(--m-mustard)" }}
        />
      </div>

      {/* Zigzag — left */}
      <div
        aria-hidden="true"
        className="absolute left-[14%] top-[17%] h-[38px] w-[130px] rotate-[-5deg]"
        style={{
          background: "#111118",
          clipPath:
            "polygon(0 40%,10% 0,23% 40%,36% 0,49% 40%,62% 0,75% 40%,88% 0,100% 40%,100% 60%,88% 23%,75% 60%,62% 23%,49% 60%,36% 23%,23% 60%,10% 23%,0 60%)",
        }}
      />

      {/* Zigzag — right */}
      <div
        aria-hidden="true"
        className="absolute right-[7%] top-[18%] h-[38px] w-[130px] rotate-[12deg]"
        style={{
          background: "#fff",
          clipPath:
            "polygon(0 40%,10% 0,23% 40%,36% 0,49% 40%,62% 0,75% 40%,88% 0,100% 40%,100% 60%,88% 23%,75% 60%,62% 23%,49% 60%,36% 23%,23% 60%,10% 23%,0 60%)",
        }}
      />

      {/* Dashed ring */}
      <div
        aria-hidden="true"
        className="absolute -bottom-[52px] right-[12%] h-[150px] w-[150px] rounded-full border-[3px] border-dashed border-[#111118]"
      />

      {/* MAIN CTA */}

      <div className="relative z-10 mx-auto w-full max-w-[1000px]">
        <div
          className="
            relative rounded-[18px]
            border-2
            p-12 text-center
            md:px-[55px] md:py-[72px]
          "
          style={{
            background: "var(--m-paper, #17151d)",
            borderColor: "var(--m-cream, #f7f3ed)",
            boxShadow: "7px 8px 0 var(--m-cream, #f7f3ed)",
          }}
        >
          {/* Inner dashed frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[11px] rounded-xl border border-dashed border-white/[0.075]"
          />

          <h2
            className="
              relative mb-5
              text-[clamp(40px,5vw,62px)]
              font-black
              leading-[1.02]
              tracking-[-2.8px]
              text-[var(--m-cream,#f7f3ed)]
            "
          >
            {siteConfig.memberCount} people are in.
            <br />
            <span style={{ color: "var(--m-coral)" }}>
              You&apos;re still outside.
            </span>
          </h2>

          <p
            className="
              relative mx-auto mb-10
              max-w-[610px]
              text-[17px]
              leading-[1.65]
            "
            style={{ color: "#c9c5cf" }}
          >
            Click below, pick a couple of interests, and you&apos;re in — before
            your coffee gets cold. No sign-up form, no catch.
          </p>

          <a
            href={siteConfig.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative inline-flex
              items-center justify-center
              gap-3
              rounded-2xl
              border-2
              px-8 py-[17px]
              text-lg font-extrabold
              no-underline
              transition-all duration-150
              hover:translate-x-[3px]
              hover:translate-y-[3px]
            "
            style={{
              background: "var(--m-coral)",
              color: "var(--m-paper, #17151d)",
              borderColor: "var(--m-cream, #f7f3ed)",
              boxShadow: "6px 7px 0 var(--m-cream, #f7f3ed)",
            }}
          >
            <DiscordIcon className="h-6 w-6" />
            <span>Join {siteConfig.name} — It&apos;s Free</span>
          </a>
        </div>
      </div>

      {/* MOBILE ADJUSTMENTS */}

      <style jsx>
        {`
          @media (max-width: 900px) {
            section {
              min-height: 720px;
            }

            section > div:nth-of-type(1) {
              left: -220px;
            }
          }

          @media (max-width: 560px) {
            section {
              min-height: 670px;
              padding-left: 16px;
              padding-right: 16px;
            }

            section > div[class*="max-w"] > div {
              border-radius: 15px;
              padding: 45px 20px 42px;
              box-shadow: 5px 6px 0 var(--m-cream, #f7f3ed);
            }

            h2 {
              letter-spacing: -1.8px;
            }

            p {
              font-size: 15px;
              margin-bottom: 32px;
            }

            a {
              width: 100%;
              padding: 16px 18px;
              font-size: 16px;
            }
          }
        `}
      </style>
    </section>
  );
}
